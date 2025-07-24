/* eslint-disable jsx-a11y/media-has-caption */

import BackgroundShade from "./BackgroundShade";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { useLayoutEffect, useRef } from "preact/hooks";

function Sermon({
  title,
  date,
  description,
}: {
  title: string;
  date: string;
  description: string;
}) {
  const ref = useRef<HTMLAudioElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      const player = new Plyr(ref.current, {
        controls: ["play", "progress", "current-time", "download"],
      });
      wrapperRef.current?.classList.remove("opacity-0");
      return () => player.destroy();
    }
  }, []);

  return (
    <li className="bg-light-background flex flex-col items-start gap-4 rounded-2xl p-4">
      <div className="flex w-full flex-row items-center justify-between gap-4">
        <h3 className="text-text-primary text-2xl font-bold">{title}</h3>
        <p className="text-text-secondary text-sm">{date}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-text-secondary text-md">{description}</h3>
      </div>
      <div
        ref={wrapperRef}
        className="flex w-full flex-row items-center gap-4 rounded-2xl opacity-0 transition-opacity duration-300"
      >
        <audio ref={ref} className="">
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
        </audio>
      </div>
    </li>
  );
}

function SermonList() {
  return (
    <BackgroundShade
      color="green"
      direction="left"
      className="grid min-h-screen place-items-center"
    >
      <ul className="flex max-w-2xl flex-col gap-8 px-4 md:px-16">
        <Sermon
          title="Sermon 1"
          date="2021-01-01"
          description="Description 1"
        />
        <Sermon
          title="Sermon 2"
          date="2021-01-02"
          description="Description 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Description 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <Sermon
          title="Sermon 3"
          date="2021-01-03"
          description="Description 3"
        />
      </ul>
    </BackgroundShade>
  );
}

export default SermonList;
