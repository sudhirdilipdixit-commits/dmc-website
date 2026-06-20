import { Button } from "@/components/ui/Button";

const rows = [
  { label: "Total fee", ignou: "₹37,800", symbiosis: "₹2,15,000" },
  { label: "Duration", ignou: "2.5 yrs", symbiosis: "2 yrs" },
  { label: "Accreditation", ignou: "UGC-DEB", symbiosis: "NAAC A++" },
  { label: "Specialisations", ignou: "8 streams", symbiosis: "5 streams" },
  {
    label: "Best suited for",
    ignou: "Govt. employees, broad credibility",
    symbiosis: "Corporate roles, brand recognition",
  },
];

export function CompareSection() {
  return (
    <section className="pb-[clamp(56px,9vw,110px)]">
      <div className="wrap">
        <div className="flex items-start gap-12 flex-wrap mb-14">
          <div className="section-marker">
            <span className="section-marker-num">ii.</span>The comparison
          </div>
          <div className="flex-1 min-w-[280px]">
            <h2 className="font-display font-bold text-[clamp(28px,4vw,42px)] leading-[1.15] tracking-[-0.02em] text-navy max-w-[22ch]">
              Two real programmes,{" "}
              <span className="font-voice italic font-medium text-navy-2">
                side by side.
              </span>
            </h2>
            <p className="mt-[18px] text-[17px] text-slate-600 max-w-[58ch]">
              This is the kind of breakdown you will get from a counsellor in
              your first call. No fluff, no spin — just the numbers and what they
              mean for your career.
            </p>
          </div>
        </div>

        <div className="bg-white border border-hairline rounded-2xl overflow-hidden shadow-card">
          {/* Column headers */}
          <div className="grid grid-cols-[1.1fr_1fr_1fr] max-sm:grid-cols-[1fr_1fr]">
            <div className="p-8 border-r border-hairline max-sm:hidden">
              <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-400">
                Comparing
              </div>
              <div className="font-voice italic text-navy text-[22px] mt-1.5">
                IGNOU vs Symbiosis
              </div>
            </div>
            <div className="p-8 border-r border-hairline">
              <h3 className="font-display font-semibold text-[22px] text-navy tracking-tight">
                IGNOU
              </h3>
              <div className="text-[13px] text-slate-500 mt-1.5">
                School of Management Studies, Delhi
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display font-semibold text-[22px] text-navy tracking-tight">
                Symbiosis Centre
              </h3>
              <div className="text-[13px] text-slate-500 mt-1.5">
                Distance Learning, Pune
              </div>
            </div>
          </div>

          {/* Data rows */}
          <div className="border-t border-hairline">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-hairline last:border-b-0 max-sm:grid-cols-[1fr_1fr]"
              >
                <div className="px-8 py-[18px] text-[15px] text-slate-600 font-medium bg-[#FBFAF6] border-r border-hairline max-sm:hidden">
                  {row.label}
                </div>
                <div className="px-8 py-[18px] border-r border-hairline">
                  <span className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1 sm:hidden">
                    IGNOU — {row.label}
                  </span>
                  <span className="text-[15px] text-navy font-semibold font-display">
                    {row.ignou}
                  </span>
                </div>
                <div className="px-8 py-[18px]">
                  <span className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-slate-400 mb-1 sm:hidden">
                    Symbiosis — {row.label}
                  </span>
                  <span className="text-[15px] text-navy font-semibold font-display">
                    {row.symbiosis}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="px-8 py-6 border-t border-hairline bg-cream flex justify-between items-center gap-5 flex-wrap">
            <p className="font-voice italic text-slate-600 text-[15px] max-w-[60ch]">
              A counsellor walks you through which trade-off makes sense for
              your role, salary band, and 3-year goal.
            </p>
            <Button variant="primary" href="#enquire" arrow>
              Compare for my profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
