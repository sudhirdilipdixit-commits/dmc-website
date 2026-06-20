import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { PullQuote } from "@/components/sections/PullQuote";

export const metadata: Metadata = {
  title: "About",
  description:
    "Distance MBA College has been helping working professionals find the right distance MBA programme for 14 years. Honest advice, no sales pressure.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-[clamp(48px,8vw,96px)] border-b border-hairline">
          <div className="wrap max-w-[760px]">
            <span className="eyebrow">About us</span>
            <h1 className="font-display font-bold text-[clamp(32px,5vw,52px)] leading-[1.1] tracking-[-0.02em] text-navy mt-6">
              14 years of{" "}
              <span className="font-voice italic font-medium text-navy-2">
                honest advice.
              </span>
            </h1>
          </div>
        </section>

        <section className="py-[clamp(48px,7vw,80px)]">
          <div className="wrap max-w-[760px]">
            <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-navy prose-headings:tracking-tight text-[17px] leading-[1.8] text-ink">
              <p>
                Distance MBA College was founded with a single conviction: working
                professionals deserve clear, unbiased information when making a
                decision that costs lakhs of rupees and years of their time.
              </p>
              <p>
                Over 14 years we have advised more than 18,000 professionals across
                India — engineers, government employees, teachers, sales managers,
                entrepreneurs — each with a different goal, a different constraint,
                and a different right answer.
              </p>
              <p>
                We are not agents. We do not earn commissions from universities.
                Our counsellors are paid to give you the right answer, not the most
                profitable one. If a distance MBA is not right for you, we will tell
                you — and save you the money.
              </p>
              <h2>What we do</h2>
              <p>
                We maintain the most comprehensive, factually accurate listing of
                UGC-DEB recognised distance and online MBA programmes in India. For
                each programme we publish the real fee, the actual duration, the
                genuine accreditation status, and an honest assessment of who it
                suits.
              </p>
              <p>
                Every person who fills out our callback form speaks to a human
                counsellor within 24 hours. The counsellor listens first. They ask
                about your role, your salary, your boss, your five-year goal. Then
                they match you to a shortlist — not a brochure dump.
              </p>
              <h2>Who we are</h2>
              <p>
                Distance MBA College is a product of MagicWorks IT Solutions Pvt.
                Ltd., headquartered in Pune. Our team of counsellors collectively
                holds over 80 years of experience in distance education advising.
              </p>
            </div>

            <div className="mt-10 flex gap-12 flex-wrap">
              {[
                { num: "18,000+", label: "Professionals advised" },
                { num: "47+", label: "Universities tracked" },
                { num: "14 yrs", label: "In distance education" },
                { num: "100%", label: "Counselling free" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-[32px] text-navy tracking-tight leading-none">
                    <span className="text-saffron">{s.num}</span>
                  </div>
                  <div className="text-[13px] text-slate-500 mt-1.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PullQuote
          text="We tell you if a distance MBA is the wrong choice for you."
          attr="Our commitment"
        />

        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
