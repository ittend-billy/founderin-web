import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-founderin-white text-founderin-dark">
      <Header />
      <SectionWrapper className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-acumin-black leading-tight">
            Privacy Policy
          </h1>
          <p className="text-founderin-dark/70">
            This Privacy Policy explains how we collect, use, and share your information when you interact with our website and services, including the Founder Pitch Shoot.
          </p>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-founderin-dark/80">
              <li>
                Intent form information: name, email, company name, short description of what you’re building, scheduling preferences.
              </li>
              <li>
                Payment details: handled by our payment processor (Stripe). We do not receive or store your full card details.
              </li>
              <li>
                Session outputs: assets created during the Founder Pitch Shoot (e.g., recorded founder video).
              </li>
              <li>
                Basic technical data: standard logs necessary for operating and securing the site (e.g., IP address, browser data).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-founderin-dark/80">
              <li>Deliver and improve the Founder Pitch Shoot and related services.</li>
              <li>Communicate with you regarding scheduling, confirmations, and service updates.</li>
              <li>Process payments and manage bookings.</li>
              <li>Maintain site reliability, safety, and compliance.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Legal Bases</h2>
            <p className="text-founderin-dark/80">
              We process information based on your consent (e.g., form submission), to perform a contract (e.g., deliver a booked session), and our legitimate interests (e.g., security, service improvement).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Sharing</h2>
            <p className="text-founderin-dark/80">
              We share information with service providers strictly as needed to operate our services (for example, payment processing via Stripe, hosting, and communications). We do not sell your personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Data Retention</h2>
            <p className="text-founderin-dark/80">
              We retain information for as long as necessary to provide the services you request, comply with legal obligations, resolve disputes, and enforce agreements. Session outputs may be retained to deliver your assets and, where applicable, with your permission for portfolio or quality purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Your Rights</h2>
            <p className="text-founderin-dark/80">
              Depending on your location, you may have rights to access, correct, or delete your personal information, or to object to or restrict certain processing. To exercise these rights, contact us using the methods available on our site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">International Transfers</h2>
            <p className="text-founderin-dark/80">
              Your information may be processed in countries that may have different data protection laws than your country. We take steps to ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Children</h2>
            <p className="text-founderin-dark/80">
              Our services are not directed to children. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Changes to This Policy</h2>
            <p className="text-founderin-dark/80">
              We may update this Privacy Policy from time to time. We will post the updated version on this page with a revised effective date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="text-founderin-dark/80">
              For privacy-related requests or questions, please reach us via the contact options provided on our website (e.g., the Founder Pitch Shoot form or social links in the footer).
            </p>
          </section>

          <p className="text-sm text-founderin-dark/60">Effective date: {new Date().toISOString().slice(0, 10)}</p>
        </div>
      </SectionWrapper>
      <Footer />
    </div>
  );
}
