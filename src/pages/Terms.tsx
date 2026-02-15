import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export default function Terms() {
  return (
    <div className="min-h-screen bg-founderin-white text-founderin-dark">
      <Header />
      <SectionWrapper className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-acumin-black leading-tight">Terms of Service</h1>
          <p className="text-founderin-dark/70">
            These Terms of Service govern your access to and use of our website and services, including the Founder Pitch Shoot. By using our services, you agree to these terms.
          </p>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Service Description</h2>
            <p className="text-founderin-dark/80">
              The Founder Pitch Shoot is a guided working session focused on clarifying your narrative, rebuilding your pitch, and recording a high-signal founder video for use with investors, partners, and the market.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Booking and Payment</h2>
            <ul className="list-disc pl-6 space-y-2 text-founderin-dark/80">
              <li>To reserve a session, you must submit the intent form and complete payment through our payment processor.</li>
              <li>Your reservation is confirmed after successful payment.</li>
              <li>Scheduling is subject to availability; sessions primarily run on Fridays.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Refund Policy</h2>
            <p className="text-founderin-dark/80">
              We offer a no-questions-asked refund if you participate fully, follow the process, apply the narrative and messaging built together, and still feel you did not receive the expected value. See the refund policy details on the Founder Pitch Shoot page.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Use of Deliverables</h2>
            <p className="text-founderin-dark/80">
              You receive a license to use the assets produced during the session (e.g., recorded video and messaging) for your business purposes. We may retain copies to provide support and maintain quality. With your permission, we may reference anonymized learnings or non-confidential excerpts for portfolio purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Your Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-founderin-dark/80">
              <li>Provide accurate information in the intent form and communications.</li>
              <li>Ensure you have rights to any materials you share or ask us to include.</li>
              <li>Refrain from unlawful, infringing, or harmful use of our site or services.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Intellectual Property</h2>
            <p className="text-founderin-dark/80">
              Pre-existing intellectual property remains with its original owner. Session outputs created for you are licensed for your use as stated above. Our brand assets and site content remain our property.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Disclaimers</h2>
            <p className="text-founderin-dark/80">
              We provide services on an “as is” and “as available” basis. We do not guarantee specific business outcomes. You are responsible for how you use the deliverables and any resulting decisions or actions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            <p className="text-founderin-dark/80">
              To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenues, or data, arising from your use of the services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Changes</h2>
            <p className="text-founderin-dark/80">
              We may modify these terms from time to time. Changes take effect when posted on this page with an updated effective date. Your continued use of the services constitutes acceptance of the revised terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="text-founderin-dark/80">
              For questions about these terms, please contact us through the methods available on our website.
            </p>
          </section>

          <p className="text-sm text-founderin-dark/60">Effective date: {new Date().toISOString().slice(0, 10)}</p>
        </div>
      </SectionWrapper>
      <Footer />
    </div>
  );
}
