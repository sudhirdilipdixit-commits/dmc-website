// ─── Sanity shared types ──────────────────────────────────────────────────────

export interface SanitySlug {
  current: string;
}

export interface SanityImage {
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; height: number; width: number };
  alt?: string;
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export interface Post {
  _id: string;
  title: string;
  slug: SanitySlug;
  excerpt?: string;
  coverImage?: SanityImage;
  publishedAt?: string;
  author?: string;
  category?: string;
  body?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
}

// ─── University ───────────────────────────────────────────────────────────────

export interface University {
  _id: string;
  name: string;
  slug: SanitySlug;
  shortName?: string;
  logo?: SanityImage;
  accreditation?: string[];
  totalFee?: number;
  duration?: string;
  specialisations?: string[];
  city?: string;
  established?: number;
  description?: PortableTextBlock[];
  pros?: string[];
  cons?: string[];
  featured?: boolean;
  order?: number;
}

// ─── Specialisation ───────────────────────────────────────────────────────────

export interface Specialisation {
  _id: string;
  name: string;
  slug: SanitySlug;
  description?: string;
  body?: PortableTextBlock[];
  universities?: Pick<University, "_id" | "name" | "slug" | "logo" | "totalFee" | "duration" | "city">[];
}

// ─── Portable Text ────────────────────────────────────────────────────────────

export interface PortableTextBlock {
  _type: string;
  _key: string;
  [key: string]: unknown;
}

// ─── Supabase ─────────────────────────────────────────────────────────────────

export interface Enquiry {
  id?: string;
  name: string;
  phone: string;
  course?: string;
  city?: string;
  created_at?: string;
}
