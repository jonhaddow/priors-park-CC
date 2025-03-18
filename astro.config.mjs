import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sanityIntegration from "@sanity/astro";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://priorsparkcommunitychurch.co.uk",
  integrations: [
    mdx(),
    tailwind(),
    sanityIntegration({
      projectId: "i6kx6v0q",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),
    preact(),
  ],
});
