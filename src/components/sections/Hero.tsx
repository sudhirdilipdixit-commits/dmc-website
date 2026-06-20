import { Button } from "@/components/ui/Button";

const stats = [
  { num: "47", suffix: "+", label: "Universities listed" },
  { num: "18,000", suffix: "+", label: "Professionals advised" },
  { num: "14", suffix: " yrs", label: "In distance education" },
  { num: "100%", suffix: "", label: "UGC-DEB recognised" },
];

export function Hero() {
  return (
    <section className="bg-cream py-[clamp(64px,9vw,120px)]">
      <div className="wrap">
        <span className="eyebrow">Honest advice for working professionals</span>

        <h1 className="font-display font-bold text-[clamp(36px,6vw,64px)] leading-[1.08] tracking-[-0.025em] text-navy mt-6 max-w-[14ch]">
          Find the distance MBA that fits the{" "}
          <span className="font-voice italic font-medium text-navy-2">
            life you already have.
          </span>
        </h1>

        <p className="text-[clamp(17px,1.6vw,19px)] text-slate-600 max-w-[56ch] mt-7 leading-relaxed">
          Every UGC-DEB recognised programme in one place. Compare fees, duration,
          and accreditation honestly. Then talk to a counsellor whose only job is to
          find the right fit, not close the sale.
        </p>

        <div className="flex flex-wrap gap-3.5 mt-10">
          <Button variant="primary" href="#enquire" arrow>
            Speak to a counsellor
          </Button>
          <Button variant="secondary" href="/universities">
            Browse universities
          </Button>
          <Button variant="ghost" href="/resources/comparison-guide">
            Download the comparison guide
          </Button>
        </div>

        {/* Stats strip */}
        <div className="flex flex-wrap gap-x-14 gap-y-6 mt-16 pt-8 border-t border-hairline/60">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display font-bold text-[32px] text-navy tracking-tight leading-none">
                <span className="text-saffron">{s.num}</span>
                {s.suffix}
              </div>
              <div className="text-[13px] text-slate-500 mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
