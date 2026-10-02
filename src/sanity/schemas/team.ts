import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineType } from "sanity";

export default defineType({
  name: "team",
  title: "Team members",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "team", newItemPosition: "after" }),
    {
      name: "name",
      title: "Name",
      type: "string",
      placeholder: "e.g. Jon Smith",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      placeholder: "e.g. Pastor",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.optional(),
    },
  ],
});
