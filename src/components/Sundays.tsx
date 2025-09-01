import type { PortableTextBlock } from "sanity";
import { RichText } from "./RichText";
import FadeReveal from "./FadeReveal";
import audio from "assets/audio.svg";

function Sundays({ text }: { text: PortableTextBlock[] }) {
  return (
    <FadeReveal>
      <div className="grid place-items-center px-8">
        <div className="flex max-w-lg flex-col gap-8">
          <div className="flex flex-col flex-wrap items-start justify-between gap-4 md:flex-row md:items-center">
            <h2 className="text-text-primary text-3xl font-bold">Sundays</h2>
            <a
              href="/sermons"
              className="text-text-primary text-md flex gap-1 font-bold underline underline-offset-2 hover:no-underline"
            >
              <img
                src={audio.src}
                alt=""
                className="text-text-secondary h-6 w-6"
              />
              Listen to sermons
            </a>
          </div>
          <RichText
            className="text-text-secondary flex flex-col gap-4 text-lg"
            value={text}
          />
        </div>
      </div>
    </FadeReveal>
  );
}

export default Sundays;
