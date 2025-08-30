import logo from "assets/logo.png";
import RainbowBanner from "./RainbowBanner";
import PinIcon from "./svgs/PinIcon";

const Hero = () => {
  return (
    <div className="flex flex-col gap-12 px-12 py-12 md:px-0">
      <RainbowBanner
        className="fixed top-0 left-0 z-50 h-2 w-full"
        dir="horizontal"
      />
      <div className="flex w-full items-center justify-center">
        <img src={logo.src} alt="Church logo" className="w-48 md:w-64" />
      </div>
      <div
        className="relative flex w-full flex-col items-center justify-center gap-12"
        data-reveal
      >
        <h1 className="font-header text-text-primary max-w-2xl text-center text-4xl leading-12 font-bold md:text-6xl md:leading-20">
          Church at the heart of Priors Park
        </h1>
        <p className="text-text-secondary max-w-lg text-center text-xl md:text-2xl">
          Worship with us on Sundays at 3.30pm, or come along to one of our
          community events during the week.
        </p>
        <p className="text-text-secondary text-md flex max-w-lg items-center justify-center gap-2 text-center md:text-xl">
          <PinIcon className="text-text-secondary inline h-5 w-5 md:h-6 md:w-6" />
          <span className="text-text-secondary inline">
            Queens Road, Tewkesbury
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
