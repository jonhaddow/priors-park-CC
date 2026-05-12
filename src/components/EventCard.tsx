function EventCard({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <section className="bg-light-background flex w-80 flex-col rounded-lg p-6 transition-all duration-500 hover:scale-105">
      <h2 className="font-header text-lg font-bold">{title}</h2>
      <p className="text-md mt-2 font-bold">{subtitle}</p>
      <p className="mt-1 text-sm">{description}</p>
    </section>
  );
}

export default EventCard;
