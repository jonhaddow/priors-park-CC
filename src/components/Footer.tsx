import React from "react";
import { useFooter } from "../hooks";

export const Footer: React.FC = () => {
	const { groups } = useFooter();

	return (
		<footer className="bg-primary-darker px-4 py-6 text-white">
			<ul className="flex flex-wrap md:justify-evenly">
				{groups.map((x) => (
					<li key={x.id} className="py-5">
						<h3 className="mb-4 font-bold">{x.title}</h3>
						<div
							className="prose prose-sm prose-yellow text-white"
							dangerouslySetInnerHTML={{ __html: x.html }}
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
