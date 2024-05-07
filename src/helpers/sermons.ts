import { sanityClient } from "sanity:client";
import type { Sermon } from "../types";

export async function getSermons() {
  const sermons = await sanityClient.fetch<Sermon[]>(
    `*[_type == "sermon"]|order(publishedDate){_id, title, "fileURL":file.asset->url, publishedDate}[0..2]`,
  );
  return sermons;
}
