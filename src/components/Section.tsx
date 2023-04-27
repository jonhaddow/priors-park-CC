import React from "react";
import { SermonManager } from ".";
import { Section as SectionInterface } from "../hooks";

interface SectionProps {
	section: SectionInterface;
	sectionRefs: React.MutableRefObject<
		{
			id: string;
			elRef: HTMLElement | null;
		}[]
	>;
}

export const Section: React.FC<SectionProps> = ({ section, sectionRefs }) => {
	return (
		<section
			key={section.id}
			className="m-auto max-w-xl px-4 py-8"
			ref={(r) => sectionRefs.current.push({ id: section.id, elRef: r })}
		>
			<h2 className="mb-2 text-3xl">{section.title}</h2>
			<hr className="mb-2"></hr>
			<div
				className="prose text-base font-light"
				dangerouslySetInnerHTML={{ __html: section.body }}
			/>
			{section.sermonManager && <SermonManager />}
		</section>
	);
};
