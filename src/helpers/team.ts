import { sanityClient } from "sanity:client";
import type { Team } from "../types";

export async function getTeam() {
  return await sanityClient.fetch<Team[]>(
    `*[_type == "team"]|order(orderRank){_id, name, description, ...select(defined(image) => {"imageURL":image.asset->url})}[]`,
  );
}
