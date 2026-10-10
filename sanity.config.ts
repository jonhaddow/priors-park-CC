import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemas";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { PlayIcon } from "@sanity/icons/Play";
import { CalendarIcon } from "@sanity/icons/Calendar";
import { UserIcon } from "@sanity/icons/User";
import { CogIcon } from "@sanity/icons/Cog";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["siteSettings"]);

export default defineConfig({
  name: "default",
  title: "Priors park CMS",

  projectId: "i6kx6v0q",
  dataset: "production",

  plugins: [
    structureTool({
      // Creating a singleton 'SiteSettings' area
      // https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
      structure: (S, context) =>
        S.list()
          .title("Sections")
          .items([
            orderableDocumentListDeskItem({
              type: "whatson",
              title: "What's On",
              S,
              context,
              icon: CalendarIcon,
            }),

            // Sermons list is non-orderable
            S.listItem()
              .title("Sermons")
              .icon(PlayIcon)
              .child(
                S.documentTypeList("sermon")
                  .title("Sermons")
                  .defaultOrdering([
                    { field: "publishedDate", direction: "desc" },
                  ]),
              ),

            orderableDocumentListDeskItem({
              type: "team",
              title: "Team members",
              S,
              context,
              icon: UserIcon,
            }),

            S.divider(),

            S.listItem().title("Site Settings").icon(CogIcon).child(
              // The site settings has a single document
              S.document()
                .schemaType("siteSettings")
                .title("Site Settings")
                .documentId("siteSettings"),
            ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
