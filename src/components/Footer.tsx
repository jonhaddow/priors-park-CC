import { toHTML } from "@portabletext/to-html";
import type { Config } from "types";

interface FooterProps {
  footer: Config["footer"];
}
const Footer = ({ footer }: FooterProps) => {
  return (
    <footer className="bg-primary-darker px-4 py-6 text-white">
      <ul className="flex flex-wrap md:justify-evenly">
        {footer.map((x) => (
          <li className="py-5" key={x.title}>
            <h3 className="mb-4 font-bold">{x.title}</h3>
            <div
              className="prose prose-sm prose-yellow text-white"
              dangerouslySetInnerHTML={{ __html: toHTML(x.body) }}
            />
          </li>
        ))}
      </ul>
      <p className="mr-4 mt-4 text-right text-xs text-gray-400">
        🛠 Designed and built by{" "}
        <a
          className="underline hover:text-gray-300 hover:no-underline"
          href="https://jon.haddow.me/"
        >
          Jon Haddow
        </a>
      </p>
    </footer>
  );
};

export default Footer;
