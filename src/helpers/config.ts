import { sanityClient } from "sanity:client";
import type { Config } from "types";

export const getConfig = async () => {
  const { footer, noticeSheet, sermonManagerSection, photoGallery } =
    await sanityClient.fetch<Config>(
      `*[_type == "siteSettings"]{noticeSheet{ text, "fileURL": file.asset->url }, footer, photoGallery[]{ ..., "image": asset->}, "sermonManager": sermonManagerSection}[0]`
    );

  return {
    footer,
    noticeSheet,
    photoGallery,
    sermonManager: sermonManagerSection,
  };
};
