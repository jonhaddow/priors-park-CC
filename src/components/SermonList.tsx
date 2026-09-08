/* eslint-disable jsx-a11y/media-has-caption */

import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { useEffect, useRef, useState } from "preact/hooks";
import type { Sermon as SermonType } from "types";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function formatDate(value: string) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.valueOf()) ? value : dateFormatter.format(parsed);
}

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
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const player = new Plyr(ref.current, {
      controls: ["play", "progress", "current-time", "download"],
      // Copied into `public` by scripts/sync-plyr-sprite.mjs.
      iconUrl: "/assets/plyr.svg",
    });
    setReady(true);
    return () => player.destroy();
  }, []);

  return (
    <li className="border-ink/8 hover:shadow-card rounded-card border bg-white p-6 transition duration-300">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <h2 className="font-display text-ink text-xl font-semibold sm:text-2xl">
          {title}
        </h2>
        <p className="text-ink-muted bg-surface-muted shrink-0 rounded-full px-3 py-1 text-xs font-semibold">
          <time dateTime={date}>{formatDate(date)}</time>
        </p>
      </div>
      {description && (
        <p className="text-ink-muted mt-3 text-sm leading-relaxed">
          {description}
        </p>
      )}
      <div
        className={`bg-surface-muted mt-5 rounded-xl px-4 py-2 transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}
      >
        <audio ref={ref}>
          <source src={fileURL} />
        </audio>
      </div>
    </li>
  );
}

function SermonList({ sermons }: { sermons: SermonType[] }) {
  return (
    <ul className="flex flex-col gap-5">
      {sermons.map((sermon) => (
        <Sermon key={sermon._id} {...sermon} date={sermon.publishedDate} />
      ))}
    </ul>
  );
}

export default SermonList;
