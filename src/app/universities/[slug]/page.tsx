import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { sanityClient } from "@/lib/sanity/client";
import { universityBySlugQuery, universitiesQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/imageUrl";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import type { University } from "@/types";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const unis: University[] = await sanityClient.fetch(universitiesQuery);
    return unis.map((u) => ({ slug: u.slug.current }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const uni: University = await sanityClient.fetch(universityBySlugQuery, { slug });
    if (!uni) return {};
    return {
      title: `${uni.name} Distance MBA`,
      description: `Fees, duration, accreditation, and honest pros & cons for the ${uni.name} distance MBA programme.`,
    };
  } catch {
    return {};
  }
}

function formatFee(fee?: number) {
  if (!fee) return null;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(fee);
}

export default async function UniversityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let uni: University | null = null;

  try {
    uni = await sanityClient.fetch(universityBySlugQuery, { slug });
  } catch {
    // Sanity not configured
  }

  if (!uni) notFound();

  const stats = [
    { label: "Total Fee", value: formatFee(uni.totalFee) },
    { label: "Duration", value: uni.duration },
    { label: "City / HQ", value: uni.city },
    { label: "Established", value: uni.established?.toString() },
  ].filter((s) => s.value);

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-cream py-[clamp(40px,7vw,80px)] border-b border-hairline">
          <div className="wrap">
            <Link
              href="/universities"
              className="text-slate-500 text-sm font-medium hover:text-navy transition-colors inline-flex items-center gap-2"
            >
              ← All Universities
            </Link>

            <div className="flex items-start gap-8 mt-6 flex-wrap">
              {uni.logo && (
                <div className="shrink-0">
                  <Image
                    src={urlFor(uni.logo).height(80).url()}
                    alt={uni.name}
                    width={160}
                    height={80}
                    className="object-contain h-20 w-auto"
                  />
                </div>
              )}
              <div>
                <h1 className="font-display font-bold text-[clamp(28px,5vw,48px)] leading-[1.1] tracking-[-0.02em] text-navy">
                  {uni.name}
                </h1>
                {uni.city && (
                  <p className="text-slate-500 text-[16px] mt-1">{uni.city}</p>
                )}
                {uni.accreditation && uni.accreditation.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {uni.accreditation.map((a) => (
                      <span
                        key={a}
                        className="text-[12px] font-semibold tracking-[0.06em] text-slate-600 px-3 py-1 border border-hairline rounded bg-white"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Quick stats */}
            {stats.length > 0 && (
              <div className="flex flex-wrap gap-x-10 gap-y-5 mt-8 pt-8 border-t border-hairline/60">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-[11px] font-semibold tracking-[0.14em] uppercase text-slate-400">
                      {s.label}
                    </div>
                    <div className="font-display font-bold text-[22px] text-navy tracking-tight mt-0.5">
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Body */}
        <section className="py-[clamp(40px,6vw,72px)]">
          <div className="wrap grid grid-cols-[1fr_320px] gap-12 items-start max-lg:grid-cols-1">
            {/* Main content */}
            <div>
              {uni.description && (
                <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-navy prose-headings:tracking-tight prose-a:text-saffron text-[17px] leading-[1.75] text-ink">
                  <PortableText value={uni.description} />
                </div>
              )}

              {/* Pros & Cons */}
              {((uni.pros && uni.pros.length > 0) ||
                (uni.cons && uni.cons.length > 0)) && (
                <div className="grid grid-cols-2 gap-6 mt-10 max-sm:grid-cols-1">
                  {uni.pros && uni.pros.length > 0 && (
                    <div className="bg-white border border-hairline rounded-xl p-6 shadow-card">
                      <h3 className="font-display font-semibold text-navy text-[16px] mb-4">
                        ✓ Pros
                      </h3>
                      <ul className="grid gap-2.5">
                        {uni.pros.map((p, i) => (
                          <li
                            key={i}
                            className="text-[15px] text-ink flex gap-2.5 items-start"
                          >
                            <span className="text-[#10B981] mt-0.5 shrink-0">●</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {uni.cons && uni.cons.length > 0 && (
                    <div className="bg-white border border-hairline rounded-xl p-6 shadow-card">
                      <h3 className="font-display font-semibold text-navy text-[16px] mb-4">
                        ✕ Cons
                      </h3>
                      <ul className="grid gap-2.5">
                        {uni.cons.map((c, i) => (
                          <li
                            key={i}
                            className="text-[15px] text-ink flex gap-2.5 items-start"
                          >
                            <span className="text-slate-400 mt-0.5 shrink-0">●</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Specialisations */}
              {uni.specialisations && uni.specialisations.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-display font-semibold text-navy text-[20px] mb-4">
                    Specialisations offered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {uni.specialisations.map((s) => (
                      <span
                        key={s}
                        className="text-[14px] font-medium text-navy px-3.5 py-1.5 border border-navy/20 rounded-lg bg-navy/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar CTA */}
            <aside className="bg-navy text-white rounded-2xl p-8 sticky top-[88px]">
              <h3 className="font-display font-semibold text-[18px] leading-snug">
                Is {uni.shortName || uni.name} right for{" "}
                <span className="font-voice italic font-medium text-saffron-2">
                  your career?
                </span>
              </h3>
              <p className="text-white/70 text-[14px] mt-3 leading-relaxed">
                A counsellor can tell you in one call — based on your role,
                salary, and goals, not a brochure.
              </p>
              <div className="mt-6 grid gap-3">
                <Button variant="primary" href="/#enquire" arrow className="w-full justify-center">
                  Get personalised advice
                </Button>
                <a
                  href="tel:+918669661005"
                  className="text-center text-white/70 text-[14px] hover:text-saffron-2 transition-colors"
                >
                  ☎ +91 86696 61005
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
