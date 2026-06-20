export function CounsellorSection() {
  return (
    <section className="pb-[clamp(56px,9vw,110px)]">
      <div className="wrap">
        <div className="flex items-start gap-12 flex-wrap mb-14">
          <div className="section-marker">
            <span className="section-marker-num">iii.</span>The counsel
          </div>
          <div className="flex-1 min-w-[280px]">
            <h2 className="font-display font-bold text-[clamp(28px,4vw,42px)] leading-[1.15] tracking-[-0.02em] text-navy max-w-[22ch]">
              You will speak with{" "}
              <span className="font-voice italic font-medium text-navy-2">
                a real person
              </span>
              , not a script.
            </h2>
            <p className="mt-[18px] text-[17px] text-slate-600 max-w-[58ch]">
              Our counsellors have walked thousands of working professionals
              through this decision. They start by listening, not pitching.
            </p>
          </div>
        </div>

        <div className="bg-navy text-white rounded-2xl p-[clamp(40px,6vw,72px)] grid grid-cols-[auto_1fr] gap-[clamp(32px,5vw,56px)] items-center max-md:grid-cols-1">
          {/* Avatar */}
          <div className="w-[140px] h-[140px] rounded-full bg-gradient-to-br from-navy-2 to-navy flex items-center justify-center font-display font-semibold text-5xl text-saffron border-2 border-saffron shrink-0 max-md:mx-auto select-none">
            PS
          </div>

          {/* Quote */}
          <div>
            <p className="font-voice italic font-medium text-[clamp(20px,2.6vw,28px)] leading-[1.4] text-white">
              <span className="text-saffron text-[1.4em] leading-none mr-1 not-italic">
                &ldquo;
              </span>
              Before I suggest anything, tell me what you are actually trying to
              change in the next two years. The right programme is the one that
              answers that question.
            </p>
            <div className="mt-6 font-display font-semibold text-white text-[15px]">
              Priya Sharma
              <span className="block text-saffron-2 font-body font-medium text-[13px] mt-1">
                Senior Counsellor &middot; 11 years &middot; Pune
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
