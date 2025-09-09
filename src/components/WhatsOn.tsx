import EventCard from "./EventCard";
import FadeReveal from "./FadeReveal";
import calendarIcon from "assets/calendar.svg";
import BackgroundShade from "./BackgroundShade";
import type { WhatsOnCard } from "types";

function WhatsOn({ cards }: { cards: WhatsOnCard[] }) {
  return (
    <FadeReveal>
      <BackgroundShade
        className="flex flex-col items-center justify-center gap-12"
        color="green"
      >
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
      </BackgroundShade>
    </FadeReveal>
  );
}

export default WhatsOn;
