import { defineType, defineField } from "sanity";

export const specialisation = defineType({
  name: "specialisation",
  title: "Specialisation",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
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
      name: "description",
      title: "Short Description",
      description: "One paragraph for the listing card.",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "Full Body",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "universities",
      title: "Universities Offering This",
      type: "array",
      of: [{ type: "reference", to: [{ type: "university" }] }],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: { select: { title: "name", subtitle: "description" } },
});
