import { defineType, defineField } from "sanity";

export const university = defineType({
  name: "university",
  title: "University",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "University Name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "shortName",
      title: "Short Name / Acronym",
      description: "E.g. IGNOU, NMIMS",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "University Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "city",
      title: "City / HQ",
      type: "string",
    }),
    defineField({
      name: "established",
      title: "Established Year",
      type: "number",
    }),
    defineField({
      name: "accreditation",
      title: "Accreditations",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: ["UGC-DEB", "NAAC A++", "NAAC A+", "NAAC A", "AICTE", "AIU", "WES"],
      },
    }),
    defineField({
      name: "totalFee",
      title: "Total Programme Fee (₹)",
      type: "number",
    }),
    defineField({
      name: "duration",
      title: "Duration",
      description: "E.g. 2 years, 2.5 years",
      type: "string",
    }),
    defineField({
      name: "specialisations",
      title: "Specialisations Offered",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "pros",
      title: "Pros",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "cons",
      title: "Cons",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      description: "Lower numbers appear first.",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Name A–Z",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "city", media: "logo" },
  },
});
