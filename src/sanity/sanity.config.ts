import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "dmc",
  title: "Distance MBA College — CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Blog Posts")
              .schemaType("post")
              .child(S.documentTypeList("post")),
            S.listItem()
              .title("Universities")
              .schemaType("university")
              .child(S.documentTypeList("university")),
            S.listItem()
              .title("Specialisations")
              .schemaType("specialisation")
              .child(S.documentTypeList("specialisation")),
            S.listItem()
              .title("Pages")
              .schemaType("page")
              .child(S.documentTypeList("page")),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
