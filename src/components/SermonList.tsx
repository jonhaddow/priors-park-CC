import BackgroundShade from "./BackgroundShade";

function Sermon({ title, date }: { title: string; date: string }) {
  return (
    <li>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-lg">{date}</p>
    </li>
  );
}

function SermonList() {
  return (
    <div className="w-full grow">
      <BackgroundShade color="green" direction="left" className="min-h-full">
        <div className="text-text-inverse flex h-full w-full flex-col items-start gap-12 self-stretch">
          <h2 className="text-3xl font-bold">Sermons</h2>
          <ul>
            <Sermon title="Sermon 1" date="2021-01-01" />
            <Sermon title="Sermon 2" date="2021-01-02" />
            <Sermon title="Sermon 3" date="2021-01-03" />
          </ul>
        </div>
      </BackgroundShade>
    </div>
  );
}

export default SermonList;
