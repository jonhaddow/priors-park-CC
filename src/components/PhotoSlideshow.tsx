import { useEffect, useState } from "preact/hooks";
import { urlForImage } from "../sanity/urlForImage";
import type { Config } from "types";

interface PhotoSlideshowProps {
  photoGallery: Config["photoGallery"];
}
const PhotoSlideshow = ({ photoGallery }: PhotoSlideshowProps) => {
  const [visiblePhoto, setVisiblePhoto] = useState(0);

  const images = photoGallery.map((x) => {
    return {
      url: urlForImage(x.image).maxWidth(200).url(),
    };
  });

  useEffect(() => {
    // Every 5 seconds, show the next image in the gallery
    const interval = setInterval(() => {
      setVisiblePhoto((prev) => {
        const nextPhoto = prev + 1;
        if (nextPhoto >= images.length) {
          return 0;
        }
        return nextPhoto;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-hidden
      className="hidden h-80 w-full items-center justify-center bg-primary-dark p-8 md:flex"
    >
      <ul className="relative h-64 max-h-full w-full">
        {images.map((x, idx) => (
          <li
            key={idx}
            className={`${
              visiblePhoto === idx ? "opacity-100" : "opacity-0"
            } absolute inset-0 m-auto h-64 w-fit text-center transition-opacity duration-1000`}
          >
            <img src={x.url} alt="" className="h-full max-h-full w-auto" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PhotoSlideshow;
