import FadeReveal from "./FadeReveal";
import audio from "assets/audio.svg";

function Sundays() {
  return (
    <FadeReveal>
      <div className="grid place-items-center px-8">
        <div className="flex max-w-lg flex-col gap-8">
          <div className="flex flex-col flex-wrap items-start justify-between gap-4 md:flex-row md:items-center">
            <h2 className="text-text-primary text-3xl font-bold">Sundays</h2>
            <a
              href="/sermons"
              className="text-text-primary text-md flex gap-1 font-bold underline underline-offset-2 hover:no-underline"
            >
              <img
                src={audio.src}
                alt=""
                className="text-text-secondary h-6 w-6"
              />
              Listen to sermons
            </a>
          </div>
          <div className="text-text-secondary flex flex-col gap-4 text-lg">
            <p>
              Come worship Jesus Christ and hear Bible teaching. Every Sunday at
              3.30pm. Children are welcome with engaging activities provided
              during the service.
            </p>
            <p>
              The church is accessible for people with disabilities, and there
              is a loop system.
            </p>
            <p>
              On the 3rd Sunday of each month we meet for breakfast at 9:30 then
              an interactive service at 10:15 including crafts, games and
              activities for all the family.
            </p>
          </div>
        </div>
      </div>
    </FadeReveal>
  );
}

export default Sundays;
