import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { sanityClient } from "@/lib/sanity/client";
import { postBySlugQuery, postsQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/imageUrl";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Post } from "@/types";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const posts: Post[] = await sanityClient.fetch(postsQuery);
    return posts.map((p) => ({ slug: p.slug.current }));
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
    const post: Post = await sanityClient.fetch(postBySlugQuery, { slug });
    if (!post) return {};
    return {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
    };
  } catch {
    return {};
  }
}

const ptComponents = {
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: { value: any }) => (
      <figure className="my-8">
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src={urlFor(value).width(800).url() as string}
            alt={(value.alt as string) || ""}
            width={800}
            height={450}
            className="w-full object-cover"
          />
        </div>
        {value.caption && (
          <figcaption className="text-center text-sm text-slate-500 mt-3 font-voice italic">
            {value.caption as string}
          </figcaption>
        )}
      </figure>
    ),
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post: Post | null = null;

  try {
    post = await sanityClient.fetch(postBySlugQuery, { slug });
  } catch {
    // Sanity not configured
  }

  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* Article header */}
        <section className="bg-cream py-[clamp(40px,7vw,80px)] border-b border-hairline">
          <div className="wrap max-w-[800px]">
            <Link
              href="/blog"
              className="text-slate-500 text-sm font-medium hover:text-navy transition-colors inline-flex items-center gap-2"
            >
              ← Back to Blog
            </Link>
            {post.category && (
              <span className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-saffron mt-5">
                {post.category}
              </span>
            )}
            <h1 className="font-display font-bold text-[clamp(28px,5vw,48px)] leading-[1.15] tracking-[-0.02em] text-navy mt-3">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-5 text-[14px] text-slate-500">
              <span>{post.author || "DMC Team"}</span>
              {post.publishedAt && (
                <>
                  <span>·</span>
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </>
              )}
            </div>
          </div>
        </section>

        {post.coverImage && (
          <div className="relative aspect-[2.5/1] max-h-[480px] overflow-hidden">
            <Image
              src={urlFor(post.coverImage).width(1200).height(480).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article body */}
        <article className="py-[clamp(40px,6vw,72px)]">
          <div className="wrap max-w-[720px]">
            {post.excerpt && (
              <p className="text-[19px] text-slate-600 leading-relaxed font-voice italic mb-10 pb-10 border-b border-hairline">
                {post.excerpt}
              </p>
            )}
            {post.body && (
              <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-navy prose-a:text-saffron prose-a:no-underline hover:prose-a:underline text-[17px] leading-[1.75]">
                <PortableText value={post.body} components={ptComponents} />
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
