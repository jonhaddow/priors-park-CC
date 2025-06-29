import logo from "assets/logo.png";

const Hero = () => {
  return (
    <div className="flex flex-col gap-24 px-12 py-12 md:px-0">
      <div className="fixed top-0 left-0 z-50 flex h-2 w-full rounded-b-md shadow-sm backdrop-blur-md">
        <div className="bg-brand-red/40 flex-1"></div>
        <div className="flex-1 bg-yellow-400/40"></div>
        <div className="bg-brand-green/40 flex-1"></div>
        <div className="bg-brand-light-blue/40 flex-1"></div>
      </div>
      {/* Hero */}
      <div className="flex w-full items-center justify-center">
        <img src={logo.src} alt="Church logo" width={250} />
      </div>
      <div
        className="relative flex w-full flex-col items-center justify-center gap-12"
        data-reveal
      >
        <h1 className="font-header text-text-primary max-w-2xl text-center text-6xl leading-20 font-bold">
          Church at the heart of Priors Park
        </h1>
        <p className="text-text-secondary max-w-lg text-2xl">
          Worship with us on Sundays at 3.30pm, or come along to one of our
          community events during the week.
        </p>
      </div>
    </div>
  );
};

export default Hero;
