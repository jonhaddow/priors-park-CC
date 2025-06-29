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
    <section className="bg-light-background flex flex-col self-stretch rounded-lg p-12 transition-all duration-500 hover:scale-105">
      <h2 className="font-header text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-lg font-bold">{time}</p>
      <p className="text-md mt-1">{description}</p>
    </section>
  );
}

export default EventCard;
