import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | JSR Insurance Services LLC",
  description:
    "Read the JSR Insurance Services LLC privacy policy, including how we handle nonpublic personal information and our SMS and email communication terms.",
};

const EFFECTIVE_DATE = "August 21, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm mb-12">
            Effective date: {EFFECTIVE_DATE}
          </p>

          <div className="space-y-10">
            <section>
              <p className="text-slate-600 text-sm leading-relaxed">
                JSR Insurance Services LLC (&quot;JSR Insurance,&quot; &quot;we,&quot; &quot;us,&quot;
                or &quot;our&quot;) is a licensed independent insurance agency. As an insurance
                producer, we collect and handle nonpublic personal information in the course
                of quoting, placing, and servicing insurance policies and surety bonds. This
                Privacy Policy explains what information we collect through this website and
                in the course of our agency operations, how we use and share it, the choices
                you have, and our terms and conditions for SMS and email communications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Information We Collect
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                When you submit an inquiry through our contact form, request a quote, or
                work with us to place or service coverage, we may collect:
              </p>
              <ul className="list-disc list-inside text-slate-600 text-sm leading-relaxed space-y-1.5">
                <li>Contact information, such as your name, email address, phone number, and company name</li>
                <li>Business and fleet details, such as USDOT/MC number, vehicle identification numbers, cargo type, and radius of operation</li>
                <li>Driver information, such as driver&apos;s license numbers and motor vehicle records, when needed for underwriting</li>
                <li>Insurance history, including prior carriers, loss runs, and claims history</li>
                <li>Bond and financial information reasonably required to underwrite a surety bond</li>
                <li>Any other information you choose to include in the subject or content of your message</li>
              </ul>
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                This information is considered &quot;nonpublic personal information&quot; under
                applicable insurance privacy laws. We do not collect payment card numbers or
                Social Security numbers through this website; where that information is
                required to bind coverage, it is collected through secure, carrier-provided
                channels.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                How We Use Your Information
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                We use the information you provide to:
              </p>
              <ul className="list-disc list-inside text-slate-600 text-sm leading-relaxed space-y-1.5">
                <li>Respond to your inquiry and prepare insurance or surety bond quotes</li>
                <li>Submit applications to insurance carriers and underwriters on your behalf</li>
                <li>Bind, issue, and service your policy or bond, including renewals and endorsements</li>
                <li>Assist with claims reporting and processing</li>
                <li>Communicate with you about your coverage, including by phone, email, or SMS text message</li>
                <li>Comply with insurance regulatory, licensing, and recordkeeping requirements</li>
                <li>Maintain records of correspondence for legitimate business purposes</li>
              </ul>
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                We do not sell your nonpublic personal information, and we do not share it
                with nonaffiliated third parties for their own marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                How We Share Your Information
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                As an insurance agency, we necessarily share information with third parties
                in order to quote and service your coverage. This includes:
              </p>
              <ul className="list-disc list-inside text-slate-600 text-sm leading-relaxed space-y-1.5">
                <li>Insurance carriers, underwriters, wholesalers, and managing general agencies for the purpose of quoting, binding, and servicing your policy or bond</li>
                <li>Premium finance companies, when you choose to finance your premium</li>
                <li>Service providers who support our operations, such as our contact-form and email delivery provider, website hosting, and agency management systems</li>
                <li>Regulators, state insurance departments, or other parties when required by law, subpoena, or to prevent fraud</li>
                <li>A successor entity in the event of a merger, acquisition, or sale of agency assets</li>
              </ul>
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                Each of these parties is authorized to use your information only as necessary
                to perform the services requested and is expected to maintain appropriate
                safeguards over it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Cookies
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                This website may use essential cookies or similar technologies required for
                basic site functionality. We do not currently use cookies for advertising or
                cross-site tracking.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Data Retention
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We retain information in accordance with applicable state insurance
                recordkeeping requirements and for as long as necessary to service your
                policy or bond, respond to your inquiry, and maintain reasonable business
                records, after which it is deleted or archived in accordance with our
                internal data retention practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Your Choices
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                You may contact us at any time to request that we correct or delete the
                personal information you have submitted to us, or to ask how your
                information has been shared, unless we are required to retain or share it
                for legal, regulatory, or legitimate business purposes, such as servicing an
                active policy or bond.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                SMS and Email Communications — Terms &amp; Conditions
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                By submitting your phone number or email address through this website, or by
                otherwise providing it to us, you may receive text messages and emails from
                JSR Insurance Services LLC related to your quote, policy, or bond. The
                following terms apply to those communications.
              </p>

              <h3 className="text-base font-semibold text-navy-900 mb-2">
                SMS Text Messaging
              </h3>
              <ul className="list-disc list-inside text-slate-600 text-sm leading-relaxed space-y-1.5 mb-4">
                <li>By providing your mobile number and opting in, you consent to receive SMS text messages from us, including quote follow-ups, policy servicing updates, appointment reminders, and renewal notices.</li>
                <li>Message frequency varies based on your interactions with us.</li>
                <li>Message and data rates may apply, as charged by your wireless carrier.</li>
                <li>Consent to receive SMS messages is not a condition of purchasing any insurance product or service.</li>
                <li>You can opt out at any time by replying <strong>STOP</strong> to any message. You will receive a one-time confirmation that you have been unsubscribed, and no further messages will be sent unless you opt back in.</li>
                <li>Reply <strong>HELP</strong> to any message for assistance, or contact us through the contact form on this website.</li>
                <li>We are not liable for delayed or undelivered messages, or for messages sent to a number that has been reassigned, without notice to us, from the individual who provided consent.</li>
                <li>Supported carriers are not liable for delayed or undelivered messages.</li>
              </ul>

              <h3 className="text-base font-semibold text-navy-900 mb-2">
                Email Communications
              </h3>
              <ul className="list-disc list-inside text-slate-600 text-sm leading-relaxed space-y-1.5">
                <li>We may send transactional emails related to your quote, application, policy, or bond, as well as, if you have opted in, marketing emails about our products and services.</li>
                <li>Every marketing email includes an unsubscribe link. You may opt out of marketing emails at any time by clicking that link; we will process your request promptly.</li>
                <li>Even after unsubscribing from marketing emails, we may continue to send transactional or servicing emails necessary to administer an active policy or bond.</li>
                <li>We will not sell or share your email address with unaffiliated third parties for their own marketing purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Changes to This Policy
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be
                posted on this page with a revised effective date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-navy-900 mb-3">
                Contact Us
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                If you have questions about this Privacy Policy, how we handle your
                information, or our SMS and email communications, please reach out through
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
