import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Distance MBA College.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="py-[clamp(48px,7vw,80px)]">
        <div className="wrap max-w-[760px]">
          <h1 className="font-display font-bold text-[clamp(28px,4vw,42px)] text-navy tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-500 text-[14px] mt-2">
            Last updated: June 2026
          </p>

          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-navy prose-headings:tracking-tight text-[16px] leading-[1.8] mt-8">
            <h2>Counselling service</h2>
            <p>
              Our counselling service is free of charge. By submitting an
              enquiry form, you consent to being contacted by a Distance MBA
              College counsellor via the phone number you provide.
            </p>

            <h2>Information accuracy</h2>
            <p>
              We endeavour to keep all programme information — fees, duration,
              accreditation — accurate and up to date. However, university
              programmes change. Always verify details directly with the
              university before enrolling.
            </p>

            <h2>No commission</h2>
            <p>
              Distance MBA College counsellors do not earn admission commissions
              from any university listed on this website. Our advice is
              independent.
            </p>

            <h2>Intellectual property</h2>
            <p>
              All content on this website — including text, comparisons, and
              guides — is the property of MagicWorks IT Solutions Pvt. Ltd. and
              may not be reproduced without written permission.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms?{" "}
              <a href="mailto:info@distancembacollege.com">
                info@distancembacollege.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
