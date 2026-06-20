export function ProblemSection() {
  return (
    <section className="py-[clamp(56px,9vw,110px)]">
      <div className="wrap">
        <div className="flex items-start gap-12 flex-wrap mb-14">
          <div className="section-marker">
            <span className="section-marker-num">i.</span>The problem
          </div>
          <div className="flex-1 min-w-[280px]">
            <h2 className="font-display font-bold text-[clamp(28px,4vw,42px)] leading-[1.15] tracking-[-0.02em] text-navy max-w-[22ch]">
              Every brochure sounds{" "}
              <span className="font-voice italic font-medium text-navy-2">
                identical.
              </span>{" "}
              Most decisions get made on incomplete information.
            </h2>
            <p className="mt-[18px] text-[17px] text-slate-600 max-w-[58ch]">
              Working professionals chasing a distance MBA face a wall of
              similar-looking options, agent-driven advice, and brochures that
              all promise the same thing. Decisions worth lakhs of rupees and
              years of effort get made on partial truths. We exist to fix that
              asymmetry, one honest conversation at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
