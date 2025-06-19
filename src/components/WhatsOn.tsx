import EventCard from "./EventCard";
import FadeReveal from "./FadeReveal";

function WhatsOn() {
  return (
    <FadeReveal>
      <div
        className={
          "flex flex-col justify-center items-center px-8 py-20 gap-8 bg-dark-background"
        }
      >
        <h2 className={"text-4xl font-bold text-text-inverse"}>What's on</h2>
        <div className="grid grid-cols-3 gap-8 items-center justify-center w-full">
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
            description="Explore what we believe, what the Bible says, and what our church is about — all in a relaxed setting over a free meal. If you’re curious, we’d love to hear from you. Get in touch for details."
          />
        </div>
      </div>
    </FadeReveal>
  );
}

export default WhatsOn;
