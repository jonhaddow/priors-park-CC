import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineType } from "sanity";

export default defineType({
  name: "whatson",
  title: "What's On Cards",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "whatson", newItemPosition: "after" }),
    {
      name: "title",
      title: "Title",
      type: "string",
      placeholder: "e.g. Evening service",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      placeholder: "e.g. Every Sunday, 6pm",
      validation: (Rule) => Rule.optional(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
});
