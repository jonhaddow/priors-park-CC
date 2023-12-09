import { getEntry } from "astro:content";

export const getConfig = async () => {
  const sectionOrder: { data: { order: { section: string }[] } } =
    await getEntry("config", "section-order");
  const noticeSheet: { data: { file: string; text: string } } = await getEntry(
    "config",
    "notice-sheet"
  );
  const photoGallery: { data: { photos: { image: string }[] } } =
    await getEntry("config", "photo-gallery");
  const sermonManager: { data: { section: string } } = await getEntry(
    "config",
    "sermon-manager"
  );

  return {
    sectionOrder: sectionOrder.data.order.map((x) => x.section),
    noticeSheet: noticeSheet.data,
    photoGallery: photoGallery.data.photos.map((x) => x.image),
    sermonManager: sermonManager.data,
  };
};
