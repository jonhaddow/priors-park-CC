import { sanityClient } from "sanity:client";
import type { WhatsOnCard } from "../types";

export async function getWhatsOnCards(): Promise<WhatsOnCard[]> {
  const cards = await sanityClient.fetch<WhatsOnCard[]>(
    `*[_type == "whatson"]|order(orderRank){_id, title, subtitle, description}`,
  );
  return cards;
}
