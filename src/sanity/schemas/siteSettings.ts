import { defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "sunday",
      title: "Sunday section",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading", value: "h2" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
        },
      ],
    },

    {
      name: "photoGallery",
      title: "Photo Gallery",
      type: "array",
      of: [{ type: "image" }],
    },

    {
      name: "mission",
      title: "Our mission section",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading", value: "h2" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
        },
      ],
    },

    {
      name: "network",
      title: "Network links",
      type: "array",
      of: [
        {
          type: "object",
          name: "networkLink",
          title: "Network Link",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },

    {
      name: "email",
      title: "Email",
      type: "email",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "facebook",
      title: "Facebook page",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
});
