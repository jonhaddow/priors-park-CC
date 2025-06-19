import { urlForImage } from "../sanity/urlForImage";
import type { Config } from "types";

function FadeToTransparent({ direction }: { direction: "left" | "right" }) {
  const directionClass =
    direction === "left" ? "bg-gradient-to-r" : "bg-gradient-to-l";
  const positionClass = direction === "left" ? "left-0" : "right-0";
  return (
    <div
      className={`absolute ${positionClass} top-0 h-full z-10 w-40 shrink-0 ${directionClass} from-light-background to-transparent`}
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
    <div className={"flex"}>
      <section className="bg-light-background relative mx-auto max-w-4xl overflow-hidden group pointer-events-auto">
        <FadeToTransparent direction="left" />
        <div className="flex animate-scroll gap-4 w-max">
          {/* Multiple sets of images infinitely scrolling */}
          {Array.from({ length: 2 }).map((_, xIdx) =>
            images.map(({ url }, yIdx) => (
              <img
                key={`${xIdx}-${yIdx}`}
                src={url}
                alt=""
                className={`block h-40 rounded-lg w-auto flex-shrink-0 pointer-events-none`}
              />
            )),
          )}
        </div>
        <FadeToTransparent direction="right" />
      </section>
    </div>
  );
};

export default PhotoSlideshow;
