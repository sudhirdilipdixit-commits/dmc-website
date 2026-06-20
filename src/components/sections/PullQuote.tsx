interface PullQuoteProps {
  text: string;
  attr?: string;
}

export function PullQuote({ text, attr }: PullQuoteProps) {
  return (
    <div className="py-[clamp(48px,8vw,96px)] text-center px-[var(--gutter)]">
      <div className="text-saffron font-voice text-[64px] leading-[0.5] mb-6 select-none">
        &ldquo;
      </div>
      <p className="font-voice italic font-medium text-[clamp(22px,3vw,32px)] leading-[1.35] text-navy max-w-[28ch] mx-auto">
        {text}
      </p>
      {attr && (
        <div className="mt-7 font-display text-xs font-semibold tracking-[0.16em] uppercase text-saffron">
          {attr}
        </div>
      )}
    </div>
  );
}
