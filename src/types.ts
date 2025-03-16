import type { SanityImageAssetDocument } from "@sanity/client";
import type { PortableTextBlock } from "sanity";

export interface Config {
  footer: {
    _key: string;
    body: PortableTextBlock;
    title: string;
  }[];
  noticeSheet: {
    fileURL: string;
    text: string;
  };
  photoGallery: {
    _key: string;
    image: SanityImageAssetDocument;
  }[];
  sermonManagerSection: string;
}

export interface Section {
  _id: string;
  title: string;
  content: PortableTextBlock[];
  imageUrl?: string;
}

export interface Sermon {
  _id: string;
  title: string;
  fileURL: string;
  publishedDate: string;
}
