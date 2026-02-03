import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@12.0.0?target=deno";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") ?? "", {
  apiVersion: "2022-11-15",
  httpClient: Stripe.createFetchHttpClient(),
});

const cryptoProvider = Stripe.createSubtleCryptoProvider();

serve(async (req) => {
  const signature = req.headers.get("Stripe-Signature");

  if (!signature) {
    return new Response("No signature", { status: 400 });
  }

  try {
    const body = await req.text();
    const endpointSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
    
    if (!endpointSecret) {
       throw new Error("Missing STRIPE_WEBHOOK_SECRET");
    }

    const event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      endpointSecret,
      undefined,
      cryptoProvider
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const clientReferenceId = session.client_reference_id;
      const stripeSessionId = session.id;
      const customerId = typeof session.customer === 'string' ? session.customer : session.customer?.id;

      if (clientReferenceId) {
        // Initialize Supabase Client
        const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
        const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
        const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

        // Update the record using the RPC function we created
        const { error } = await supabase.rpc("update_payment_status", {
          p_id: clientReferenceId,
          p_status: "completed",
          p_stripe_session_id: stripeSessionId,
          p_stripe_customer_id: customerId ?? null
        });

        if (error) {
          console.error("Error updating payment status:", error);
          // Don't fail the webhook response, just log the error
          // Returning 500 would cause Stripe to retry, which might be desired,
          // but we should ensure idempotency (which RPC/update usually is).
          return new Response("Error updating database", { status: 500 });
        }
        
        console.log(`Successfully updated payment status for ${clientReferenceId}`);
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }
});
