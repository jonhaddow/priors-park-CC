import { sanityClient } from "sanity:client";
import type { Config } from "types";

export const getConfig = async () => {
  return await sanityClient.fetch<Config>(
    `*[_type == "siteSettings"]{title, description, photoGallery[]{ ..., "image": asset->}, sunday, mission, network, email, phone, address, facebook}[0]`,
  );
};
