import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity/client";
import { universitiesQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/imageUrl";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import type { University } from "@/types";

export const metadata: Metadata = {
  title: "Universities",
  description:
    "Browse all 47+ UGC-DEB recognised distance MBA universities listed on Distance MBA College. Compare fees, duration, and accreditation honestly.",
};

export const revalidate = 3600;

function formatFee(fee?: number) {
  if (!fee) return null;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(fee);
}

export default async function UniversitiesPage() {
  let universities: University[] = [];
  try {
    universities = await sanityClient.fetch(universitiesQuery);
  } catch {
    // Sanity not yet configured
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-cream py-[clamp(48px,8vw,96px)] border-b border-hairline">
          <div className="wrap">
            <span className="eyebrow">All programmes</span>
            <h1 className="font-display font-bold text-[clamp(32px,5vw,52px)] leading-[1.1] tracking-[-0.02em] text-navy mt-6 max-w-[18ch]">
              47+ universities,{" "}
              <span className="font-voice italic font-medium text-navy-2">
                one honest list.
              </span>
            </h1>
            <p className="text-slate-600 text-[17px] mt-5 max-w-[52ch]">
              Every UGC-DEB recognised distance MBA programme in India. Fees,
              duration, and accreditation — no puffery, no missing numbers.
            </p>
          </div>
        </section>

        {/* University grid */}
        <section className="py-[clamp(48px,7vw,80px)]">
          <div className="wrap">
            {universities.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-slate-400 text-lg">
                  University data is being added. Check back shortly.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
                {universities.map((uni) => (
                  <Link
                    key={uni._id}
                    href={`/universities/${uni.slug.current}`}
                    className="bg-white border border-hairline rounded-2xl p-6 shadow-card hover:-translate-y-1 hover:border-saffron/40 transition-all duration-200 group flex flex-col"
                  >
                    {/* Logo / monogram */}
                    <div className="h-14 flex items-center mb-4">
                      {uni.logo ? (
                        <Image
                          src={urlFor(uni.logo).height(56).url()}
                          alt={uni.name}
                          width={140}
                          height={56}
                          className="object-contain h-14 w-auto"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center font-display font-bold text-saffron text-xl">
                          {uni.shortName?.slice(0, 2) || uni.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>

                    <h2 className="font-display font-bold text-[18px] text-navy leading-snug group-hover:text-navy-2 transition-colors">
                      {uni.name}
                    </h2>
                    {uni.city && (
                      <p className="text-slate-500 text-[13px] mt-1">{uni.city}</p>
                    )}

                    <div className="mt-4 pt-4 border-t border-hairline grid grid-cols-2 gap-3 mt-auto">
                      {uni.totalFee && (
                        <div>
                          <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-slate-400">
                            Total fee
                          </div>
                          <div className="font-display font-semibold text-navy text-[15px] mt-0.5">
                            {formatFee(uni.totalFee)}
                          </div>
                        </div>
                      )}
                      {uni.duration && (
                        <div>
                          <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-slate-400">
                            Duration
                          </div>
                          <div className="font-display font-semibold text-navy text-[15px] mt-0.5">
                            {uni.duration}
                          </div>
                        </div>
                      )}
                    </div>

                    {uni.accreditation && uni.accreditation.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {uni.accreditation.slice(0, 3).map((a) => (
                          <span
                            key={a}
                            className="text-[11px] font-semibold tracking-[0.06em] text-slate-500 px-2 py-0.5 border border-hairline rounded bg-cream"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <LeadFormSection />
      </main>
      <Footer />
    </>
  );
}
