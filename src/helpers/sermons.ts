import { sanityClient } from "sanity:client";
import type { Sermon } from "../types";

export async function getSermons() {
  return await sanityClient.fetch<Sermon[]>(
    `*[_type == "sermon"]|order(publishedDate desc){_id, title, "fileURL":file.asset->url, publishedDate}[]`,
  );
}
