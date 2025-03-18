import type { Config } from "types";
import logo from "assets/logo.png";
import type { GetImageResult } from "astro";

interface HeroProps {
  noticeSheet: Config["noticeSheet"];
  heroPhoto: GetImageResult;
}
const Hero = ({ heroPhoto, noticeSheet }: HeroProps) => {
  return (
    <div
      id="home"
      className="bg-cover bg-center bg-no-repeat pt-14"
      style={{ backgroundImage: `url(${heroPhoto.src})` }}
    >
      <div className="flex flex-wrap items-center justify-center gap-16 p-16">
        <div className="flex items-center justify-center rounded-lg bg-gray-50 p-2">
          <img src={logo.src} alt="Church logo" width={250} />
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="https://square.link/u/1C92EgRJ"
            className="flex h-16 w-56 items-center justify-center rounded-md bg-primary p-2 font-bold text-white shadow-xs transition-colors hover:bg-primary-dark hover:underline focus:bg-primary-dark focus:underline"
          >
            Donate
          </a>
          <a
            className="mt-5 flex h-16 w-56 items-center justify-center rounded-md bg-white p-2 text-center font-bold text-primary transition-colors hover:bg-gray-200 hover:underline focus:bg-gray-200 focus:underline"
            href={noticeSheet.fileURL}
          >
            {noticeSheet.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
