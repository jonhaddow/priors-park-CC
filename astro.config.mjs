import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sanityIntegration from "@sanity/astro";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://priorsparkcommunitychurch.co.uk",

  integrations: [
    mdx(),
    sanityIntegration({
      projectId: "i6kx6v0q",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),
    preact(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
