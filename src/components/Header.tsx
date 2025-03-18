import { useState } from "preact/hooks";
import Menu from "./icons/Menu.tsx";

interface HeaderProps {
  sections: {
    _id: string;
    title: string;
  }[];
}
const Header = ({ sections }: HeaderProps) => {
  const [expanded, setExpanded] = useState(false);

  const onMenuClick = () => {
    setExpanded(!expanded);
  };

  const executeScroll = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    const nav = document.querySelector("nav");
    if (section && nav) {
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: section.offsetTop - nav.offsetHeight,
      });
    }
  };

  return (
    <nav className="fixed z-50 w-full bg-primary-dark md:block">
      <button
        id="menu-button"
        onClick={onMenuClick}
        className="float-right p-4 md:hidden"
        aria-label="Open navigation menu"
        aria-controls="menu"
        aria-expanded={expanded}
      >
        <Menu />
      </button>
      <ul
        id="menu"
        className={`z-50 mt-8 ${expanded ? "" : "hidden"} flex-wrap justify-start md:mt-0 md:flex`}
      >
        {sections.map((x) => (
          <li key={x._id} className="md:p-2">
            <button
              data-section-id={x._id}
              onClick={() => executeScroll(x._id)}
              className="w-full p-2 text-gray-50 transition-colors hover:bg-primary-darker hover:text-white focus:bg-primary-darker focus:text-white md:w-auto md:rounded-lg"
            >
              {x.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
