import { sanityClient } from "sanity:client";
import type { Config } from "types";

let cached: Promise<Config> | undefined;

/**
 * Site-wide settings. Every page needs these (the header, footer and head
 * tags all read from them), so the result is memoised for the build.
 */
export const getConfig = () => {
  cached ??= sanityClient.fetch<Config>(
    `*[_type == "siteSettings"]{title, description, photoGallery[]{ ..., "image": asset->}, sunday, mission, network, email, phone, address, facebook}[0]`,
  );
  return cached;
};
