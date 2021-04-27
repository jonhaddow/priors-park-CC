import React from "react";
import { useFooter } from "../hooks";

export const Footer: React.FC = () => {
	const { groups } = useFooter();

	return (
		<footer className="bg-primary-darker py-6 px-4 text-white">
			<ul className="flex sm:justify-evenly flex-wrap">
				{groups.map((x) => (
					<li key={x.id} className="py-5 footer-group">
						<h3 className="font-bold mb-4">{x.title}</h3>
						<div dangerouslySetInnerHTML={{ __html: x.html }} />
					</li>
				))}
			</ul>
		</footer>
	);
};
