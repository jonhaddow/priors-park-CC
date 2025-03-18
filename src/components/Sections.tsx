import { toHTML } from "@portabletext/to-html";
import SermonManager from "./SermonManager";
import type { Config, Section, Sermon } from "types";

interface SectionsProps {
  sections: Section[];
  sermons: Sermon[];
  config: Config;
}
const Sections = ({ sections, sermons, config }: SectionsProps) => {
  const { sermonManagerSection } = config;
  return (
    <>
      {sections.map(({ _id, title, content, imageUrl }) => (
        <>
          <section key={_id} id={_id} className="m-auto max-w-xl px-4 py-8">
            <h2 className="mb-2 text-3xl">{title}</h2>
            <hr className="mb-2" />
            <div className="prose text-base font-light">
              <div dangerouslySetInnerHTML={{ __html: toHTML(content) }} />
            </div>
            {sermonManagerSection === title && (
              <SermonManager sermons={sermons} />
            )}
          </section>
          {imageUrl && (
            <div
              class="h-64 bg-cover bg-center bg-no-repeat shadow-lg saturate-200"
              style={{ "background-image": `url(${imageUrl})` }}
            />
          )}
        </>
      ))}
    </>
  );
};

export default Sections;
