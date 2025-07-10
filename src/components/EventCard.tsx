function EventCard({
  title,
  time,
  description,
}: {
  title: string;
  time: string;
  description: string;
}) {
  return (
    <section className="bg-light-background flex flex-col self-stretch rounded-lg p-8 transition-all duration-500 hover:scale-105">
      <h2 className="font-header text--lg font-bold">{title}</h2>
      <p className="text-md mt-2 font-bold">{time}</p>
      <p className="mt-1 text-sm">{description}</p>
    </section>
  );
}

export default EventCard;
