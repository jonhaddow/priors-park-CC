import React from "react";
import { useSections } from "../hooks";

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

	return (
		<nav ref={navRef} className="bg-blue-800 fixed w-full hidden md:block z-50">
			<ul className="flex justify-start flex-wrap z-50">
				{sections.map((x) => (
					<li key={x.id} className="p-4">
						<button
							onClick={() => onNavigate(x.id)}
							className="text-gray-50 rounded-lg p-2 hover:text-white hover:bg-blue-600 transition-colors focus:outline-none focus:bg-blue-600 focus:text-white"
						>
							{x.title}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};
