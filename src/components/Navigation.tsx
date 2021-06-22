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
		<nav ref={navRef} className="bg-primary fixed w-full md:block z-50">
			<button
				className="md:hidden float-right p-4"
				onClick={() => setExpand(!expand)}
			>
				<GiHamburgerMenu color="white" />
			</button>
			<ul
				className={`${
					expand ? "block" : "hidden"
				} mt-8 md:mt-0 md:flex justify-start flex-wrap z-50`}
			>
				{sections.map((x) => (
					<li key={x.id} className="md:p-4">
						<button
							onClick={() => onNavigate(x.id)}
							className="w-full md:w-auto text-gray-50 md:rounded-lg p-2 hover:text-white hover:bg-primary-dark transition-colors focus:outline-none focus:bg-primary-dark focus:text-white"
						>
							{x.title}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};
