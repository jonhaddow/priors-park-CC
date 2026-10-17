/* eslint-disable jsx-a11y/media-has-caption */

import { useRef, useState } from "preact/hooks";
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

function formatTime(seconds: number) {
  const whole = Math.floor(seconds);
  const hours = Math.floor(whole / 3600);
  const minutes = Math.floor((whole % 3600) / 60);
  const secs = String(whole % 60).padStart(2, "0");
  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, "0")}:${secs}`
    : `${minutes}:${secs}`;
}

const controlClass =
  "text-ink-muted hover:bg-accent focus-visible:bg-accent flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:text-white focus-visible:text-white";

function Player({ title, fileURL }: { title: string; fileURL: string }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  function toggle() {
    const audio = ref.current;
    if (!audio) return;
    if (audio.paused) void audio.play();
    else audio.pause();
  }

  return (
    <div className="bg-surface-muted mt-5 flex items-center gap-3 rounded-xl px-2 py-2">
      <audio
        ref={ref}
        src={fileURL}
        preload="metadata"
        onPlay={() => {
          setPlaying(true);
          setStarted(true);
        }}
        onPause={() => setPlaying(false)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
      />
      <button
        type="button"
        className={controlClass}
        onClick={toggle}
        aria-label={`${playing ? "Pause" : "Play"} ${title}`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="currentColor"
          aria-hidden="true"
        >
          {playing ? (
            <path d="M7 4h3v16H7zM14 4h3v16h-3z" />
          ) : (
            <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z" />
          )}
        </svg>
      </button>
      <input
        type="range"
        className="seek-bar min-w-0 flex-1 cursor-pointer"
        style={{ "--progress": `${duration ? (time / duration) * 100 : 0}%` }}
        min={0}
        max={duration || 0}
        step="any"
        value={time}
        onInput={(e) => {
          const audio = ref.current;
          if (audio) audio.currentTime = Number(e.currentTarget.value);
        }}
        aria-label={`Seek ${title}`}
        aria-valuetext={`${formatTime(time)} of ${formatTime(duration)}`}
      />
      <span className="text-ink-muted w-14 shrink-0 text-right text-[13px] tabular-nums">
        {formatTime(started ? time : duration)}
      </span>
      <a
        className={controlClass}
        href={fileURL}
        download
        target="_blank"
        rel="noreferrer"
        aria-label={`Download ${title}`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 4v11m-5-5 5 5 5-5M5 20h14" />
        </svg>
      </a>
    </div>
  );
}

function Sermon({
  title,
  date,
  fileURL,
}: {
  title: string;
  date: string;
  fileURL: string;
}) {
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
      <Player title={title} fileURL={fileURL} />
    </li>
  );
}

function SermonList({ sermons }: { sermons: SermonType[] }) {
  return (
    <ul className="flex flex-col gap-5">
      {sermons.map((sermon) => (
        <Sermon
          key={sermon._id}
          title={sermon.title}
          fileURL={sermon.fileURL}
          date={sermon.publishedDate}
        />
      ))}
    </ul>
  );
}

export default SermonList;
