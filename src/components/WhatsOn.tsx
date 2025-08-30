import type { ComponentProps } from "preact";
import EventCard from "./EventCard";
import FadeReveal from "./FadeReveal";
import calendarIcon from "assets/calendar.svg";
import BackgroundShade from "./BackgroundShade";

const allEvents: ComponentProps<typeof EventCard>[] = [
  {
    title: "Prayer Meeting",
    time: "Monday, 7pm",
    description:
      "Worship and prayer together. Please get in touch for details.",
  },
  {
    title: "Compassion Cafe",
    time: "Tuesdays/Fridays, 9am–2pm",
    description:
      "Providing free and low cost quality food and drinks. Full breakfast and lunch menus.",
  },
  {
    title: "The Hub",
    time: "Tuesdays/Fridays, 9am-4pm",
    description:
      "A community hub offering food bank vouchers, utility payments, emergency food parcels, counselling, and general help and advice.",
  },
  {
    title: "Dance with Parkinson's",
    time: "Tuesdays, 11am-12:30pm",
    description:
      "A chance to dance and socialise with others living with Parkinson's. Contact Sarah Hartley at dancebesocial@gmail.com.",
  },
  {
    title: "The Pantry",
    time: "Wednesday, 9am–12pm",
    description:
      "A food bank for the local community. For £4, you can take away a bag of food, including fresh fruit and vegetables.",
  },
  {
    title: "Luncheon Club",
    time: "Wednesday, 11:30am",
    description:
      "A chance for over 50s to get together and enjoy a meal. Disability minibus available.",
  },
  {
    title: "Fellowship",
    time: "Every other Wednesday at 7pm",
    description: "Fellowship evening to study the bible together over a meal.",
  },
  {
    title: "Lighthouse Club",
    time: "Thursdays at 5pm (term time)",
    description:
      "A fun, welcoming club for children in Reception to Year 5, with games, crafts, songs, and Bible stories.",
  },
  {
    title: "Men’s Group",
    time: "Every other Friday at 7pm",
    description:
      "Sharing time together as men, good food, honest conversation, and a chance to support each other.",
  },
  {
    title: "Curious",
    time: "",
    description:
      "Explore what we believe, what the Bible says, and what our church is about — all in a relaxed setting either in a group, or one-to-one. If you're curious, we'd love to hear from you.",
  },
  {
    title: "Explorers & Explorers Extra",
    time: "",
    description:
      "A fun, welcoming bible-reading and pizza club for children from year 5 upwards. See calendar for details.",
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
