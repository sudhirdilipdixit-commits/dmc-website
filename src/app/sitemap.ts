import type { MetadataRoute } from "next";
import { sanityClient } from "@/lib/sanity/client";
import { postsQuery, universitiesQuery, specialisationsQuery } from "@/lib/sanity/queries";
import type { Post, University, Specialisation } from "@/types";

const BASE_URL = "https://distancembacollege.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/universities`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/specialisations`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources/comparison-guide`, changeFrequency: "weekly", priority: 0.8 },
  ];

  try {
    const [posts, universities, specialisations] = await Promise.all([
      sanityClient.fetch<Post[]>(postsQuery),
      sanityClient.fetch<University[]>(universitiesQuery),
      sanityClient.fetch<Specialisation[]>(specialisationsQuery),
    ]);

    const postUrls: MetadataRoute.Sitemap = posts.map((p) => ({
      url: `${BASE_URL}/blog/${p.slug.current}`,
      lastModified: p.publishedAt ? new Date(p.publishedAt) : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    const uniUrls: MetadataRoute.Sitemap = universities.map((u) => ({
      url: `${BASE_URL}/universities/${u.slug.current}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

    const specUrls: MetadataRoute.Sitemap = specialisations.map((s) => ({
      url: `${BASE_URL}/specialisations/${s.slug.current}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    return [...staticPages, ...postUrls, ...uniUrls, ...specUrls];
  } catch {
    return staticPages;
  }
}
