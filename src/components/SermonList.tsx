/* eslint-disable jsx-a11y/media-has-caption */

import BackgroundShade from "./BackgroundShade";
import { default as Plyr } from "plyr";
import "plyr/dist/plyr.css";
import { useLayoutEffect, useRef } from "preact/hooks";
import type { Sermon } from "types";

function Sermon({
  title,
  date,
  description,
  fileURL,
}: {
  title: string;
  date: string;
  description?: string;
  fileURL: string;
}) {
  const ref = useRef<HTMLAudioElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      const player = new Plyr.default(ref.current, {
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
      {description && (
        <div className="flex flex-col">
          <h3 className="text-text-secondary text-md">{description}</h3>
        </div>
      )}
      <div
        ref={wrapperRef}
        className="flex w-full flex-row items-center gap-4 rounded-2xl opacity-0 transition-opacity duration-300"
      >
        <audio ref={ref} className="">
          <source src={fileURL} />
        </audio>
      </div>
    </li>
  );
}

function SermonList({ sermons }: { sermons: Sermon[] }) {
  return (
    <BackgroundShade
      color="green"
      direction="left"
      className="grid flex-grow place-items-center"
    >
      <ul className="flex max-w-2xl flex-col gap-8 px-4 md:px-16">
        {sermons.map((sermon) => (
          <Sermon key={sermon._id} {...sermon} date={sermon.publishedDate} />
        ))}
      </ul>
    </BackgroundShade>
  );
}

export default SermonList;
