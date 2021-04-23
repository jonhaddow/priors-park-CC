import React from "react";
import { useSections } from "../hooks";

export const Navigation: React.FC = () => {
	const sections: {
		title: string;
		id: string;
	}[] = [{ title: "Home", id: "home" }, ...useSections()];

	return (
		<nav className="bg-blue-500 fixed w-full">
			<ul className="flex justify-start">
				{sections.map((x) => (
					<li key={x.id} className="p-4">
						<button className="text-gray-50 rounded-lg p-2 hover:text-white hover:bg-blue-600 transition-colors focus:outline-none focus:bg-blue-600 focus:text-white">
							{x.title}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};
