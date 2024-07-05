import { defineContentConfig, defineCollection, z } from "@nuxt/content";

const postSchema = z.object({
  date: z.string(),
});
const projectSchema = z.object({
  source: z.string().url().optional(),
  github: z.string().optional(),
  url: z.string().optional(),
});
const hardwareRecord = z.record(z.string(), z.array(z.string()));
// const hardware = z.custom<Hardware>();
const hardwareSchema = z.object({
  pc: hardwareRecord,
  server: hardwareRecord,
  server_ha: hardwareRecord,
});

export default defineContentConfig({
  collections: {
    // Russian posts collection
    posts_ru: defineCollection({
      type: "page",
      source: {
        include: "ru/posts/**",
        prefix: "posts",
      },
      schema: postSchema,
    }),
    // English posts collection
    posts_en: defineCollection({
      type: "page",
      source: {
        include: "en/posts/**",
        prefix: "posts",
      },
      schema: postSchema,
    }),
    // Esperanto posts collection
    posts_eo: defineCollection({
      type: "page",
      source: {
        include: "eo/posts/**",
        prefix: "posts",
      },
      schema: postSchema,
    }),
    // Russian projects collection
    projects_ru: defineCollection({
      type: "page",
      source: {
        include: "ru/projects/**",
        prefix: "projects",
      },
      schema: projectSchema,
    }),
    // English projects collection
    projects_en: defineCollection({
      type: "page",
      source: {
        include: "en/projects/**",
        prefix: "projects",
      },
      schema: projectSchema,
    }),
    // Esperanto projects collection
    projects_eo: defineCollection({
      type: "page",
      source: {
        include: "eo/projects/**",
        prefix: "projects",
      },
      schema: projectSchema,
    }),
    // Hardware collection
    hardware: defineCollection({
      type: "data",
      source: "hardware.yml",
      schema: hardwareSchema,
    }),
    content: defineCollection({
      type: "page",
      source: {
        include: "**",
      },
    }),
  },
});
