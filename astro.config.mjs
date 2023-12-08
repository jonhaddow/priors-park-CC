import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
  site: "https://priorsparkcommunitychurch.co.uk",
  integrations: [
    mdx(),
    tailwind(),
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "master",
        },
        media_folder: "src/content/images",
        editor: {
          preview: false,
        },
        collections: [
          {
            name: "sections",
            label: "Sections",
            folder: "src/content/sections",
            public_folder: "../images",
            create: true,
            fields: [
              {
                label: "Title",
                name: "title",
                widget: "string",
              },
              {
                label: "Image",
                name: "image",
                widget: "image",
                allow_multiple: false,
                required: false,
              },
              {
                label: "Content",
                name: "body",
                widget: "markdown",
              },
              {
                label: "Add sermon manager",
                name: "sermon-manager",
                widget: "boolean",
                default: false,
              },
            ],
          },
          {
            name: "settings",
            label: "Settings",
            files: [
              {
                label: "Photo gallery",
                name: "photo-gallery",
                public_folder: "../images",
                file: "src/content/config/photo-gallery.md",
                fields: [
                  {
                    label: "Photos",
                    name: "photos",
                    widget: "list",
                    fields: [
                      {
                        label: "Image",
                        name: "image",
                        widget: "image",
                      },
                    ],
                  },
                ],
              },
              {
                label: "Notice sheet",
                name: "notice-sheet",
                media_folder: "{{public_folder}}/static/assets",
                public_folder: "/assets",
                file: "src/content/config/notice-sheet.md",
                fields: [
                  {
                    label: "Text",
                    name: "text",
                    widget: "string",
                    default: "Click here to view the newsletter",
                  },
                  {
                    label: "File",
                    name: "file",
                    widget: "file",
                  },
                ],
              },
              {
                name: "sectionOrder",
                label: "Section order",
                file: "src/content/config/section-order.md",
                fields: [
                  {
                    label: "Order",
                    name: "order",
                    widget: "list",
                    fields: [
                      {
                        label: "Section",
                        name: "section",
                        widget: "relation",
                        collection: "sections",
                        searchFields: ["title"],
                        valueField: "title",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "sermons",
            label: "Sermons",
            folder: "content/sermons",
            media_folder: "/static/assets/sermons",
            public_folder: "/assets/sermons",
            create: true,
            fields: [
              {
                label: "Title",
                name: "title",
                widget: "string",
              },
              {
                label: "File",
                name: "file",
                widget: "file",
              },
              {
                label: "Published date",
                name: "published",
                widget: "datetime",
                required: false,
              },
            ],
          },
          {
            name: "footer",
            label: "Footer",
            folder: "src/content/footerLinks",
            create: true,
            fields: [
              {
                name: "title",
                label: "Title",
                widget: "string",
              },
              {
                name: "body",
                label: "Body",
                widget: "markdown",
              },
              {
                name: "footer-order",
                label: "Order",
                widget: "number",
                default: 0,
              },
            ],
          },
        ],
      },
    }),
  ],
});
