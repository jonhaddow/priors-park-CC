import { sanityClient } from "sanity:client";
import type { Section } from "../types";

export async function getSections() {
  const sections = await sanityClient.fetch<Section[]>(
    `*[_type == "section"]|order(orderRank){_id, title, content, "imageUrl": image.asset->url}`,
  );
  return sections;
}
