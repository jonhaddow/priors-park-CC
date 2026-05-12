import EventCard from "./EventCard";
import FadeReveal from "./FadeReveal";
import calendarIcon from "assets/calendar.svg";
import BackgroundShade from "./BackgroundShade";
import type { WhatsOnCard } from "types";
import Sundays from "./Sundays";
import type { PortableTextBlock } from "sanity";

function WhatsOn({
  cards,
  sundayText,
}: {
  cards: WhatsOnCard[];
  sundayText: PortableTextBlock[];
}) {
  return (
    <FadeReveal>
      <BackgroundShade
        className="flex flex-col items-center gap-12 xl:flex-row xl:items-start"
        color="green"
      >
        <Sundays text={sundayText} />
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="flex w-full flex-row items-center justify-center">
            <h2 className="text-text-inverse text-4xl font-bold">
              What&apos;s on
            </h2>
          </div>
          <div className="relative flex w-full flex-wrap justify-center gap-8">
            {cards.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
          <a
            href="/events"
            className="text-text-inverse flex cursor-pointer items-center gap-2 text-lg font-bold underline underline-offset-2 hover:no-underline"
          >
            <img src={calendarIcon.src} alt="Calendar" className="h-6 w-6" />
            View full calendar
          </a>
        </div>
      </BackgroundShade>
    </FadeReveal>
  );
}

export default WhatsOn;
