import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | JSR Insurance Services LLC",
  description:
    "Read the Terms of Service for JSR Insurance Services LLC, including the terms governing use of this website and requests for insurance quotes.",
};

const EFFECTIVE_DATE = "August 21, 2026";

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-500 text-sm mb-12">
            Effective date: {EFFECTIVE_DATE}
          </p>

          <div className="space-y-10">
            <section>
              <p className="text-slate-600 text-sm leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of
                this website operated by JSR Insurance Services LLC (&quot;JSR Insurance,&quot;
                &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using this
                website, submitting a contact or quote request, or otherwise interacting with
                us through this site, you agree to be bound by these Terms. If you do not
                agree, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Who We Are
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                JSR Insurance Services LLC is a licensed independent insurance agency that
                helps commercial trucking operators, owner-operators, and freight brokers
                obtain insurance coverage and surety bonds. We are an insurance producer, not
                an insurance carrier. Coverage described or referenced on this website is
                underwritten by third-party insurance carriers, not by JSR Insurance, and is
                subject to each carrier&apos;s underwriting guidelines, policy terms,
                conditions, and exclusions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Use of This Website
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                This website is provided for the purpose of informing you about our agency
                and the coverage we help arrange, and for allowing you to request a quote or
                contact us. You agree to use this website only for lawful purposes and agree
                not to:
              </p>
              <ul className="list-disc list-inside text-slate-600 text-sm leading-relaxed space-y-1.5">
                <li>Submit false, misleading, or fraudulent information through the contact or quote form</li>
                <li>Use the website in any way that could damage, disable, overburden, or impair it, or interfere with any other party&apos;s use of it</li>
                <li>Attempt to gain unauthorized access to any portion of the website, other accounts, or related systems</li>
                <li>Use any automated means, including bots or scrapers, to access or collect content from this website without our prior written consent</li>
                <li>Copy, reproduce, distribute, or create derivative works from the content of this website without our prior written consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                No Insurance Coverage Created by This Website
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nothing on this website constitutes an offer, binder, or guarantee of
                insurance coverage. Submitting a contact form, quote request, or any other
                information through this website does not create, alter, or bind any
                insurance policy or surety bond, and does not establish a producer-client
                relationship. Coverage is only bound, and terms only take effect, once you
                have received written confirmation from a licensed agent and, where
                applicable, the issuing carrier. Any rates, coverage descriptions, or
                availability referenced on this website are general in nature, subject to
                change, and not a quote for your specific risk until confirmed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Communications
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                By submitting your contact information through this website, you may be
                contacted by phone, email, or SMS text message regarding your inquiry or
                quote request. SMS and email communications, including opt-out instructions,
                are governed by our{" "}
                <a href="/privacy" className="text-navy-800 font-medium underline hover:text-navy-600">
                  Privacy Policy
                </a>
                , which is incorporated into these Terms by reference.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Intellectual Property
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                The text, graphics, logos, and other content on this website are owned by or
                licensed to JSR Insurance Services LLC and are protected by applicable
                intellectual property laws. You may view and print content from this website
                for your own personal, non-commercial reference, but may not otherwise
                reproduce, republish, or distribute it without our prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Third-Party Links
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                This website may contain links to third-party websites, including insurance
                carriers or other service providers. We do not control and are not
                responsible for the content, accuracy, or practices of any third-party
                website. Your use of any linked website is subject to that website&apos;s own
                terms and policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Disclaimer of Warranties
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                This website and its content are provided &quot;as is&quot; and &quot;as
                available,&quot; without warranties of any kind, whether express or implied,
                including but not limited to warranties of merchantability, fitness for a
                particular purpose, or non-infringement. We do not warrant that this website
                will be uninterrupted, error-free, or free of viruses or other harmful
                components, or that any information on this website is complete, accurate, or
                current.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Limitation of Liability
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                To the fullest extent permitted by law, JSR Insurance Services LLC and its
                members, employees, and agents will not be liable for any indirect,
                incidental, special, consequential, or punitive damages, or any loss of
                profits, revenue, data, or business opportunity, arising out of or related to
                your use of, or inability to use, this website, even if we have been advised
                of the possibility of such damages. Nothing in these Terms limits any
                liability that cannot be limited or excluded under applicable insurance
                regulations or other law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Indemnification
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                You agree to indemnify and hold harmless JSR Insurance Services LLC, its
                members, employees, and agents from any claims, losses, liabilities, damages,
                and expenses, including reasonable attorneys&apos; fees, arising out of your
                misuse of this website or your violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Governing Law
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of the
                state of Texas in which JSR Insurance Services LLC maintains its principal place of
                business, without regard to conflict of law principles, and without prejudice
                to any insurance regulatory requirements of the state in which you reside or
                in which coverage is placed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Changes to These Terms
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We may update these Terms from time to time. Any changes will be posted on
                this page with a revised effective date. Your continued use of this website
                after changes are posted constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Contact Us
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                If you have questions about these Terms of Service, please reach out through
                the{" "}
                <a href="/#contact" className="text-navy-800 font-medium underline hover:text-navy-600">
                  contact form
                </a>{" "}
                on this website.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
