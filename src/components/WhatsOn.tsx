import type { ComponentProps } from "preact";
import EventCard from "./EventCard";
import FadeReveal from "./FadeReveal";
import calendarIcon from "assets/calendar.svg";
import BackgroundShade from "./BackgroundShade";

const allEvents: ComponentProps<typeof EventCard>[] = [
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
  {
    title: "Fellowship",
    time: "Every other Thursday at 7pm",
    description:
      "Fellowship evening to study the bible together. If you would like to come please contact Nigel.",
  },
  {
    title: "Men’s Group",
    time: "1st and 3rd Friday at 7pm",
    description:
      "Sharing time together as men, learning how we can support each other through the difficulties of life.",
  },
  {
    title: "Compassion Cafe",
    time: "Tuesdays/Friday, 9am–2pm",
    description:
      "In support of Compassion Uk. Providing free and low cost food and drinks. Full breakfast and lunch menus.",
  },
];

function WhatsOn() {
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
          {allEvents.map((event) => (
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
