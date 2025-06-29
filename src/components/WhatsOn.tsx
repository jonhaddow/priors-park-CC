import EventCard from "./EventCard";
import FadeReveal from "./FadeReveal";
import calendarIcon from "assets/calendar.svg";

function WhatsOn() {
  return (
    <FadeReveal>
      <div className="bg-dark-background flex flex-col items-center justify-center gap-12 px-8 py-12">
        <h2 className="text-text-inverse text-4xl font-bold">What&apos;s on</h2>
        <div className="grid w-full grid-cols-1 items-center justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          <EventCard
            title="Sunday Service"
            time="Join us at 3:30pm"
            description="Come and worship Jesus Christ, our Lord and Saviour, and hear teaching from the Bible. Children are very welcome — we provide engaging activities for them during the service."
          />

          <EventCard
            title="Lighthouse Club"
            time="Wednesdays at 5:00pm (term time)"
            description="A fun and welcoming club for children in Reception to Year 5. Games, crafts, songs, and Bible stories — all designed to help children explore faith in a lively and age-appropriate way."
          />

          <EventCard
            title="Curious"
            time="Tuesdays at 7:00pm (for a limited time)"
            description="Explore what we believe, what the Bible says, and what our church is about — all in a relaxed setting over a free meal. If you're curious, we'd love to hear from you. Get in touch for details."
          />
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
