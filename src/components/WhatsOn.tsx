import type { ComponentProps } from "preact";
import EventCard from "./EventCard";
import FadeReveal from "./FadeReveal";
import calendarIcon from "assets/calendar.svg";

const allEvents: ComponentProps<typeof EventCard>[] = [
  {
    title: "Sunday Service",
    time: "Join us at 3:30pm",
    description:
      "Come worship Jesus Christ and hear Bible teaching. Children are welcome with engaging activities provided during the service.",
  },
  {
    title: "Lighthouse Club",
    time: "Wednesdays at 5pm (term time)",
    description:
      "A fun, welcoming club for children in Reception to Year 5, with games, crafts, songs, and Bible stories to help them explore faith in an age-appropriate way.",
  },
  {
    title: "Curious",
    time: "Tuesdays at 7pm (for a limited time)",
    description:
      "Explore what we believe, what the Bible says, and what our church is about — all in a relaxed setting over a free meal. If you're curious, we'd love to hear from you. Get in touch for details.",
  },
  {
    title: "Prayer Meeting",
    time: "Mondays at 7pm",
    description:
      "Please come along or contact Nigel if you would like to join in with prayer at the chapel.",
  },
];

function WhatsOn() {
  return (
    <FadeReveal>
      <div className="bg-dark-background flex flex-col items-center justify-center gap-12 px-4 py-12 md:px-8">
        <h2 className="text-text-inverse text-4xl font-bold">What&apos;s on</h2>
        <div className="relative grid w-full grid-cols-1 items-center justify-center gap-8 px-8 sm:grid-cols-2 md:grid-cols-2 md:px-12 lg:grid-cols-3 xl:grid-cols-4">
          {allEvents.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
        <a
          href="/events"
          className="text-text-inverse flex cursor-pointer items-center gap-2 text-lg font-bold hover:underline"
        >
          <img src={calendarIcon.src} alt="Calendar" className="h-6 w-6" />
          View full calendar
        </a>
      </div>
    </FadeReveal>
  );
}

export default WhatsOn;
