import type { Metadata } from "next";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity/client";
import { specialisationsQuery } from "@/lib/sanity/queries";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import type { Specialisation } from "@/types";

export const metadata: Metadata = {
  title: "Specialisations",
  description:
    "Browse MBA specialisations available through distance education in India — Finance, Marketing, HR, Operations, and more.",
};

export const revalidate = 3600;

const specialisationIcons: Record<string, string> = {
  finance: "📈",
  marketing: "📣",
  hr: "🤝",
  operations: "⚙️",
  "international-business": "🌐",
  it: "💻",
  healthcare: "🏥",
  supply: "🚚",
};

export default async function SpecialisationsPage() {
  let specialisations: Specialisation[] = [];
  try {
    specialisations = await sanityClient.fetch(specialisationsQuery);
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
            <span className="eyebrow">Find your focus</span>
            <h1 className="font-display font-bold text-[clamp(32px,5vw,52px)] leading-[1.1] tracking-[-0.02em] text-navy mt-6 max-w-[20ch]">
              MBA specialisations for{" "}
              <span className="font-voice italic font-medium text-navy-2">
                every career path.
              </span>
            </h1>
            <p className="text-slate-600 text-[17px] mt-5 max-w-[52ch]">
              Different roles call for different focus areas. Browse the
              specialisations available through distance MBA programmes and find
              which universities offer them.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-[clamp(48px,7vw,80px)]">
          <div className="wrap">
            {specialisations.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-slate-400 text-lg">
                  Specialisation pages are being added. Check back shortly.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
                {specialisations.map((spec) => {
                  const icon = specialisationIcons[spec.slug.current] || "🎓";
                  return (
                    <Link
                      key={spec._id}
                      href={`/specialisations/${spec.slug.current}`}
                      className="bg-white border border-hairline rounded-2xl p-6 shadow-card hover:-translate-y-1 hover:border-saffron/40 transition-all duration-200 group"
                    >
                      <div className="text-3xl mb-4">{icon}</div>
                      <h2 className="font-display font-bold text-[20px] text-navy group-hover:text-navy-2 transition-colors">
                        {spec.name}
                      </h2>
                      {spec.description && (
                        <p className="text-slate-600 text-[15px] mt-2 line-clamp-3">
                          {spec.description}
                        </p>
                      )}
                      <div className="mt-4 text-saffron text-sm font-semibold">
                        View universities →
                      </div>
                    </Link>
                  );
                })}
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
