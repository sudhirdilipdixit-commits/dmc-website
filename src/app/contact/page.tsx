import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeadFormSection } from "@/components/sections/LeadFormSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak to a Distance MBA College counsellor. Call, WhatsApp, or fill the form — we reply within 24 hours.",
};

const contactDetails = [
  {
    icon: "☎",
    label: "Phone / WhatsApp",
    value: "+91 86696 61005",
    href: "tel:+918669661005",
  },
  {
    icon: "✉",
    label: "Email",
    value: "info@distancembacollege.com",
    href: "mailto:info@distancembacollege.com",
  },
  {
    icon: "📍",
    label: "Office",
    value: "Pune, Maharashtra, India",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-[clamp(48px,8vw,96px)] border-b border-hairline">
          <div className="wrap">
            <span className="eyebrow">Get in touch</span>
            <h1 className="font-display font-bold text-[clamp(32px,5vw,52px)] leading-[1.1] tracking-[-0.02em] text-navy mt-6 max-w-[18ch]">
              We&rsquo;re here to{" "}
              <span className="font-voice italic font-medium text-navy-2">
                listen first.
              </span>
            </h1>
            <p className="text-slate-600 text-[17px] mt-5 max-w-[48ch]">
              One call with a counsellor — no pitch, no pressure. Just the
              honest answer to which programme is right for you.
            </p>

            <div className="flex flex-wrap gap-8 mt-10">
              {contactDetails.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">{c.icon}</span>
                  <div>
                    <div className="text-[12px] font-semibold tracking-[0.1em] uppercase text-slate-400">
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="font-display font-semibold text-navy text-[16px] hover:text-saffron transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="font-display font-semibold text-navy text-[16px]">
                        {c.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
