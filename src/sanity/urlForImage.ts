import { sanityClient } from "sanity:client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageAssetDocument } from "@sanity/client";

export const imageBuilder = createImageUrlBuilder(sanityClient);

export function urlForImage(source: SanityImageAssetDocument) {
  return imageBuilder.image(source);
}
