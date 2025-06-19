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
    <section className="flex flex-col bg-light-background p-12 rounded-lg self-stretch transition-all duration-500 hover:scale-105">
      <h2 className="text-2xl font-bold font-header">{title}</h2>
      <p className="text-lg mt-2 font-bold">{time}</p>
      <p className="text-md mt-1">{description}</p>
    </section>
  );
}

export default EventCard;
