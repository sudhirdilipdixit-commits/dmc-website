import { groq } from "next-sanity";

// ─── Blog ────────────────────────────────────────────────────────────────────

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    author,
    category
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    author,
    category,
    body,
    seoTitle,
    seoDescription
  }
`;

// ─── Universities ─────────────────────────────────────────────────────────────

export const universitiesQuery = groq`
  *[_type == "university"] | order(order asc, name asc) {
    _id,
    name,
    slug,
    shortName,
    logo,
    accreditation,
    totalFee,
    duration,
    specialisations,
    city,
    featured
  }
`;

export const universityBySlugQuery = groq`
  *[_type == "university" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    shortName,
    logo,
    accreditation,
    totalFee,
    duration,
    specialisations,
    city,
    established,
    description,
    pros,
    cons
  }
`;

// ─── Specialisations ──────────────────────────────────────────────────────────

export const specialisationsQuery = groq`
  *[_type == "specialisation"] | order(order asc, name asc) {
    _id,
    name,
    slug,
    description
  }
`;

export const specialisationBySlugQuery = groq`
  *[_type == "specialisation" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    body,
    "universities": universities[]-> {
      _id,
      name,
      slug,
      logo,
      totalFee,
      duration,
      city
    }
  }
`;

// ─── Pages ────────────────────────────────────────────────────────────────────

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    body,
    seoTitle,
    seoDescription
  }
`;
