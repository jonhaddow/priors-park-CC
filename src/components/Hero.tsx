import logo from "assets/logo.png";

const Hero = () => {
  return (
    <div className="flex flex-col gap-24 px-12 md:px-0 py-12">
      <div class="fixed top-0 left-0 w-full h-2 z-50 flex backdrop-blur-md rounded-b-md shadow-sm">
        <div class="flex-1 bg-brand-red/40"></div>
        <div class="flex-1 bg-yellow-400/40"></div>
        <div class="flex-1 bg-brand-green/40"></div>
        <div class="flex-1 bg-brand-light-blue/40"></div>
      </div>
      {/* Hero */}
      <div className="flex items-center justify-center w-full">
        <img src={logo.src} alt="Church logo" width={250} />
      </div>
      <div
        className="flex flex-col gap-12 items-center justify-center w-full relative"
        data-reveal
      >
        <h1 className="text-6xl font-bold leading-20 font-header text-center text-text-primary max-w-2xl">
          Church at the heart of Priors Park
        </h1>
        <p className="text-2xl max-w-lg text-text-secondary">
          Worship with us on Sundays at 3.30pm, or come along to one of our
          community events during the week.
        </p>
      </div>
    </div>
  );
};

export default Hero;
