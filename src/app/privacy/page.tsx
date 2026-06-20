import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Distance MBA College.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="py-[clamp(48px,7vw,80px)]">
        <div className="wrap max-w-[760px]">
          <h1 className="font-display font-bold text-[clamp(28px,4vw,42px)] text-navy tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-[14px] mt-2">
            Last updated: June 2026
          </p>

          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-navy prose-headings:tracking-tight text-[16px] leading-[1.8] mt-8">
            <h2>What we collect</h2>
            <p>
              When you submit an enquiry form on this website, we collect your
              name, phone number, course preference, and city. We do not collect
              any payment information.
            </p>

            <h2>How we use it</h2>
            <p>
              Your information is used solely to have a counsellor call you with
              personalised programme recommendations. We do not sell, share, or
              rent your personal data to any third party.
            </p>

            <h2>Storage</h2>
            <p>
              Enquiry data is stored securely in our database. You may request
              deletion of your data at any time by emailing us at{" "}
              <a href="mailto:info@distancembacollege.com">
                info@distancembacollege.com
              </a>
              .
            </p>

            <h2>Cookies</h2>
            <p>
              We use only essential cookies necessary for the website to
              function. We do not use tracking or advertising cookies.
            </p>

            <h2>Contact</h2>
            <p>
              For any privacy concerns, contact us at{" "}
              <a href="mailto:info@distancembacollege.com">
                info@distancembacollege.com
              </a>{" "}
              or call +91 86696 61005.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
