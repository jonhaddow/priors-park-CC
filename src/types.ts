import type { SanityImageAssetDocument } from "@sanity/client";
import type { PortableTextBlock } from "sanity";

export interface Config {
  title: string;
  description: string;
  sunday: PortableTextBlock[];
  photoGallery: {
    _key: string;
    image: SanityImageAssetDocument;
  }[];
  mission: PortableTextBlock[];
  network: { name: string; url: string }[];
  email: string;
  phone: string;
  address: string;
  facebook: string;
}

export interface WhatsOnCard {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Sermon {
  _id: string;
  title: string;
  fileURL: string;
  publishedDate: string;
}

export interface Team {
  _id: string;
  name: string;
  description: string;
  imageURL: string;
}
