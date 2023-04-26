import React, { useState } from "react";
import { useSections } from "../hooks";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

interface NavigationProps {
	navRef: React.MutableRefObject<HTMLElement | null>;
	onNavigate: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
	navRef,
	onNavigate,
}) => {
	const sections: {
		title: string;
		id: string;
	}[] = [{ title: "Home", id: "home" }, ...useSections()];

	const [expand, setExpand] = useState(false);

	return (
		<nav ref={navRef} className="fixed z-50 w-full bg-primary-dark md:block">
			<button
				className="float-right p-4 md:hidden"
				onClick={() => setExpand(!expand)}
			>
				<GiHamburgerMenu color="white" />
			</button>
			<ul
				className={`${
					expand ? "block" : "hidden"
				} z-50 mt-8 flex-wrap justify-start md:mt-0 md:flex`}
			>
				{sections.map((x) => (
					<li key={x.id} className="md:p-2">
						<button
							onClick={() => onNavigate(x.id)}
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
