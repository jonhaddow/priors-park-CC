import { urlForImage } from "../sanity/urlForImage";
import type { Config } from "types";

function FadeToTransparent({ direction }: { direction: "left" | "right" }) {
  const directionClass =
    direction === "left" ? "bg-gradient-to-r" : "bg-gradient-to-l";
  const positionClass = direction === "left" ? "left-0" : "right-0";
  return (
    <div
      className={`absolute ${positionClass} top-0 z-10 h-full w-40 shrink-0 ${directionClass} from-light-background to-transparent`}
    />
  );
}

interface PhotoSlideshowProps {
  photoGallery: Config["photoGallery"];
}
const PhotoSlideshow = ({ photoGallery }: PhotoSlideshowProps) => {
  const images = photoGallery.map((x) => {
    return {
      url: urlForImage(x.image).maxWidth(200).url(),
    };
  });

  return (
    <div className="flex">
      <section className="bg-light-background group pointer-events-auto relative mx-auto max-w-4xl overflow-hidden">
        <FadeToTransparent direction="left" />
        <div className="group flex w-max basis-full">
          {/* 
            Multiple sets of images infinitely scrolling
            https://blog.logto.io/css-only-infinite-scroll
          */}
          {Array.from({ length: 2 }).map((_, xIdx) => (
            <div
              key={xIdx}
              className="photo-group animate-scroll group-hover:animate-scroll-paused flex gap-4 pr-4"
            >
              {images.map(({ url }, yIdx) => (
                <img
                  key={`${xIdx}-${yIdx}`}
                  src={url}
                  alt=""
                  className="pointer-events-none block h-40 w-auto flex-shrink-0 rounded-lg"
                />
              ))}
            </div>
          ))}
        </div>
        <FadeToTransparent direction="right" />
      </section>
    </div>
  );
};

export default PhotoSlideshow;
