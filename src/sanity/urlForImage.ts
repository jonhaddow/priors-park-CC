import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageAssetDocument } from "@sanity/client";

export const imageBuilder = imageUrlBuilder(sanityClient);

export function urlForImage(source: SanityImageAssetDocument) {
  return imageBuilder.image(source);
}
