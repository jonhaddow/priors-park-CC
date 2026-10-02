import { defineType } from "sanity";

export default defineType({
  name: "sermon",
  title: "Sermons",
  type: "document",
  orderings: [
    {
      title: "Published Date",
      name: "publishedDate",
      by: [{ field: "publishedDate", direction: "desc" }],
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "file",
      title: "File",
      type: "file",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedDate",
      title: "Published Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
  ],
});
