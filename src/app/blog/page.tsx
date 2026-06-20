import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/lib/sanity/client";
import { postsQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/imageUrl";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Post } from "@/types";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Honest insights about distance MBA programmes, universities, and career decisions for working professionals in India.",
};

export const revalidate = 3600;

export default async function BlogPage() {
  let posts: Post[] = [];
  try {
    posts = await sanityClient.fetch(postsQuery);
  } catch {
    // Sanity not yet configured — show empty state
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <section className="bg-cream py-[clamp(48px,8vw,96px)] border-b border-hairline">
          <div className="wrap">
            <span className="eyebrow">Insights &amp; guides</span>
            <h1 className="font-display font-bold text-[clamp(32px,5vw,52px)] leading-[1.1] tracking-[-0.02em] text-navy mt-6 max-w-[20ch]">
              Honest information for{" "}
              <span className="font-voice italic font-medium text-navy-2">
                better decisions.
              </span>
            </h1>
            <p className="text-slate-600 text-[17px] mt-5 max-w-[52ch]">
              Real breakdowns of distance MBA programmes, university reviews,
              and career guidance — written for working professionals, not
              brochures.
            </p>
          </div>
        </section>

        {/* Post grid */}
        <section className="py-[clamp(48px,7vw,80px)]">
          <div className="wrap">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-slate-400 text-lg">
                  Posts are coming soon. Check back shortly.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
                {posts.map((post) => (
                  <article
                    key={post._id}
                    className="bg-white border border-hairline rounded-2xl overflow-hidden shadow-card hover:-translate-y-1 transition-transform duration-200 group"
                  >
                    {post.coverImage && (
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={urlFor(post.coverImage).width(640).height(360).url()}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {post.category && (
                        <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-saffron">
                          {post.category}
                        </span>
                      )}
                      <h2 className="font-display font-bold text-[20px] text-navy mt-2 leading-snug">
                        <Link
                          href={`/blog/${post.slug.current}`}
                          className="hover:text-saffron transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      {post.excerpt && (
                        <p className="text-slate-600 text-[15px] mt-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-hairline">
                        <span className="text-[13px] text-slate-400">
                          {post.author || "DMC Team"}
                        </span>
                        {post.publishedAt && (
                          <time
                            dateTime={post.publishedAt}
                            className="text-[13px] text-slate-400"
                          >
                            {new Date(post.publishedAt).toLocaleDateString(
                              "en-IN",
                              { day: "numeric", month: "short", year: "numeric" }
                            )}
                          </time>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
