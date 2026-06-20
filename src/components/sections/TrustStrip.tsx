const badges = ["UGC-DEB", "AICTE", "NAAC", "AIU", "WES"];

export function TrustStrip() {
  return (
    <section className="border-t border-b border-hairline py-7 bg-white">
      <div className="wrap flex items-center justify-between gap-8 flex-wrap">
        <div className="text-xs font-semibold tracking-[0.16em] uppercase text-slate-500">
          Trusted by{" "}
          <strong className="text-navy font-bold">18,000+</strong> working
          professionals across India
        </div>
        <div className="flex gap-6 flex-wrap items-center">
          {badges.map((b) => (
            <span
              key={b}
              className="font-display font-semibold text-[13px] tracking-[0.04em] text-slate-500 px-3.5 py-1.5 border border-hairline rounded bg-white"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
