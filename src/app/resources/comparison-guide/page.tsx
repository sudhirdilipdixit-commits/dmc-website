import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeadFormSection } from "@/components/sections/LeadFormSection";

export const metadata: Metadata = {
  title: "Distance MBA Comparison Guide",
  description:
    "A complete, honest comparison guide for distance MBA programmes in India — IGNOU, Symbiosis, Amity, NMIMS, and more.",
};

const universities = [
  {
    name: "IGNOU",
    fee: "₹37,800",
    duration: "2.5 yrs",
    accred: "UGC-DEB",
    for: "Govt. employees, broad credibility",
  },
  {
    name: "Symbiosis",
    fee: "₹2,15,000",
    duration: "2 yrs",
    accred: "NAAC A++",
    for: "Corporate roles, brand recognition",
  },
  {
    name: "Amity",
    fee: "₹1,25,000",
    duration: "2 yrs",
    accred: "NAAC A+, UGC-DEB",
    for: "Wide specialisation choice, private sector",
  },
  {
    name: "NMIMS",
    fee: "₹1,60,000",
    duration: "2 yrs",
    accred: "NAAC A, UGC-DEB",
    for: "Finance & marketing specialisation",
  },
];

export default function ComparisonGuidePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-[clamp(48px,8vw,96px)] border-b border-hairline">
          <div className="wrap">
            <span className="eyebrow">Free download</span>
            <h1 className="font-display font-bold text-[clamp(32px,5vw,52px)] leading-[1.1] tracking-[-0.02em] text-navy mt-6 max-w-[22ch]">
              The honest distance MBA{" "}
              <span className="font-voice italic font-medium text-navy-2">
                comparison guide.
              </span>
            </h1>
            <p className="text-slate-600 text-[17px] mt-5 max-w-[54ch]">
              Real fees, real accreditation, real pros and cons — across the
              most popular distance MBA programmes in India. No puffery, no
              missing numbers.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-[clamp(48px,7vw,80px)]">
          <div className="wrap">
            <h2 className="font-display font-bold text-[clamp(22px,3vw,32px)] text-navy tracking-tight mb-8">
              At a glance
            </h2>

            <div className="bg-white border border-hairline rounded-2xl overflow-x-auto shadow-card">
              <table className="w-full text-left text-[15px]">
                <thead>
                  <tr className="border-b border-hairline">
                    <th className="px-6 py-4 font-display font-semibold text-navy text-[13px] tracking-[0.06em] uppercase">
                      University
                    </th>
                    <th className="px-6 py-4 font-display font-semibold text-navy text-[13px] tracking-[0.06em] uppercase">
                      Total Fee
                    </th>
                    <th className="px-6 py-4 font-display font-semibold text-navy text-[13px] tracking-[0.06em] uppercase">
                      Duration
                    </th>
                    <th className="px-6 py-4 font-display font-semibold text-navy text-[13px] tracking-[0.06em] uppercase">
                      Accreditation
                    </th>
                    <th className="px-6 py-4 font-display font-semibold text-navy text-[13px] tracking-[0.06em] uppercase">
                      Best for
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {universities.map((u, i) => (
                    <tr
                      key={u.name}
                      className={`border-b border-hairline last:border-b-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-[#FBFAF6]"
                      }`}
                    >
                      <td className="px-6 py-4 font-display font-bold text-navy">
                        {u.name}
                      </td>
                      <td className="px-6 py-4 font-semibold text-navy">{u.fee}</td>
                      <td className="px-6 py-4 text-slate-600">{u.duration}</td>
                      <td className="px-6 py-4">
                        <span className="text-[12px] font-semibold tracking-[0.06em] text-slate-600 px-2.5 py-1 border border-hairline rounded bg-white">
                          {u.accred}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600 max-w-[200px]">
                        {u.for}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="font-voice italic text-slate-500 text-[15px] mt-4 max-w-[64ch]">
              Data verified as of June 2026. Fees are approximate — always
              confirm directly with the university before enrolling.
            </p>
          </div>
        </section>

        {/* Lead form CTA */}
        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
