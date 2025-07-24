import ChevronLeft from "../assets/chevron_left.svg";

function SermonNav() {
  return (
    <div className="flex flex-row items-center gap-8 p-8">
      <a
        href="/"
        className="text-text-secondary text-md flex items-center underline hover:no-underline"
      >
        <img src={ChevronLeft.src} className="inline h-6 w-6" alt="" />
        <span>Back to Home</span>
      </a>
      <h2 className="text-text-primary text-4xl font-bold">Sermons</h2>
    </div>
  );
}

export default SermonNav;
