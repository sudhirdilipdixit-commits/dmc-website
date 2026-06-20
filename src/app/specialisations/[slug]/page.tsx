import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { sanityClient } from "@/lib/sanity/client";
import { specialisationBySlugQuery, specialisationsQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/imageUrl";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import type { Specialisation } from "@/types";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const specs: Specialisation[] = await sanityClient.fetch(specialisationsQuery);
    return specs.map((s) => ({ slug: s.slug.current }));
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
    const spec: Specialisation = await sanityClient.fetch(specialisationBySlugQuery, { slug });
    if (!spec) return {};
    return {
      title: `${spec.name} — Distance MBA Specialisation`,
      description:
        spec.description ||
        `Find distance MBA programmes specialising in ${spec.name}. Compare universities, fees, and duration.`,
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

export default async function SpecialisationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let spec: Specialisation | null = null;

  try {
    spec = await sanityClient.fetch(specialisationBySlugQuery, { slug });
  } catch {
    // Sanity not configured
  }

  if (!spec) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-cream py-[clamp(48px,8vw,96px)] border-b border-hairline">
          <div className="wrap">
            <Link
              href="/specialisations"
              className="text-slate-500 text-sm font-medium hover:text-navy transition-colors inline-flex items-center gap-2"
            >
              ← All Specialisations
            </Link>
            <h1 className="font-display font-bold text-[clamp(32px,5vw,52px)] leading-[1.1] tracking-[-0.02em] text-navy mt-5">
              MBA in{" "}
              <span className="font-voice italic font-medium text-navy-2">
                {spec.name}
              </span>
            </h1>
            {spec.description && (
              <p className="text-slate-600 text-[17px] mt-5 max-w-[56ch]">
                {spec.description}
              </p>
            )}
          </div>
        </section>

        {/* Body + universities */}
        <section className="py-[clamp(48px,7vw,80px)]">
          <div className="wrap">
            <div className="grid grid-cols-[1fr_340px] gap-12 items-start max-lg:grid-cols-1">
              {/* Main content */}
              <div>
                {spec.body && (
                  <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-navy prose-headings:tracking-tight text-[17px] leading-[1.75] mb-12">
                    <PortableText value={spec.body} />
                  </div>
                )}

                {/* Universities grid */}
                {spec.universities && spec.universities.length > 0 && (
                  <>
                    <h2 className="font-display font-bold text-[24px] text-navy tracking-tight mb-6">
                      Universities offering {spec.name}
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
                      {spec.universities.map((uni) => (
                        <Link
                          key={uni._id}
                          href={`/universities/${uni.slug.current}`}
                          className="bg-white border border-hairline rounded-xl p-5 shadow-card hover:-translate-y-1 hover:border-saffron/40 transition-all duration-200 group"
                        >
                          {uni.logo && (
                            <div className="h-10 mb-3">
                              <Image
                                src={urlFor(uni.logo).height(40).url()}
                                alt={uni.name}
                                width={100}
                                height={40}
                                className="object-contain h-10 w-auto"
                              />
                            </div>
                          )}
                          <h3 className="font-display font-semibold text-navy text-[16px] group-hover:text-navy-2 transition-colors leading-snug">
                            {uni.name}
                          </h3>
                          {uni.city && (
                            <p className="text-slate-500 text-[13px] mt-1">{uni.city}</p>
                          )}
                          <div className="mt-3 flex gap-4">
                            {uni.totalFee && (
                              <div>
                                <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-slate-400">
                                  Fee
                                </div>
                                <div className="font-display font-semibold text-navy text-[14px]">
                                  {formatFee(uni.totalFee)}
                                </div>
                              </div>
                            )}
                            {uni.duration && (
                              <div>
                                <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-slate-400">
                                  Duration
                                </div>
                                <div className="font-display font-semibold text-navy text-[14px]">
                                  {uni.duration}
                                </div>
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Sidebar */}
              <aside className="bg-navy text-white rounded-2xl p-8 sticky top-[88px]">
                <h3 className="font-display font-semibold text-[18px] leading-snug">
                  Which {spec.name} programme is{" "}
                  <span className="font-voice italic font-medium text-saffron-2">
                    right for you?
                  </span>
                </h3>
                <p className="text-white/70 text-[14px] mt-3 leading-relaxed">
                  Fees and accreditation matter, but so does your career goal.
                  A counsellor can tell you which university suits your profile.
                </p>
                <div className="mt-6 grid gap-3">
                  <Button
                    variant="primary"
                    href="/#enquire"
                    arrow
                    className="w-full justify-center"
                  >
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
