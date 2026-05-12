function RainbowBanner({
  className,
  dir,
}: {
  className?: string;
  dir?: "vertical" | "horizontal";
}) {
  return (
    <div
      className={`${className} flex self-stretch rounded-b-md shadow-sm backdrop-blur-md ${dir === "vertical" ? "flex-col" : "flex-row"}`}
    >
      <div className="bg-brand-red/40 flex-1"></div>
      <div className="flex-1 bg-yellow-400/40"></div>
      <div className="bg-brand-green/40 flex-1"></div>
      <div className="bg-brand-light-blue/40 flex-1"></div>
    </div>
  );
}

export default RainbowBanner;
