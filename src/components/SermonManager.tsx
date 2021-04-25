import React from "react";
import { useSermons } from "../hooks";
import { HiDownload } from "@react-icons/all-files/hi/HiDownload";

export const SermonManager: React.FC = () => {
	const sermons = useSermons();

	return (
		<div className="shadow-md p-4 bg-gray-50 my-6">
			<h3 className="mb-2 font-bold">Sermons</h3>
			<ul>
				{sermons.map((x) => (
					<li key={x.id} className="mb-2">
						<a href={x.file} className="flex items-end group">
							<HiDownload
								size={36}
								className="mr-2 text-gray-900 group-hover:text-blue-800"
							/>
							<div className="flex flex-col justify-center group-hover:text-blue-800">
								<time className="font-thin text-xs">
									{new Date(x.published).toLocaleDateString(undefined, {
										weekday: "long",
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</time>
								<span>{x.title}</span>
							</div>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};
