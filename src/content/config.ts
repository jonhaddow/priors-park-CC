import { defineCollection, z } from "astro:content";

const config = defineCollection({});

const sections = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});

const sermons = defineCollection({
  schema: z.object({
    title: z.string(),
    file: z.string(),
    published: z.date(),
  }),
});

const footerLinks = defineCollection({
  schema: z.object({
    title: z.string(),
    "footer-order": z.number(),
  }),
});

export const collections = { config, sections, footerLinks, sermons };
