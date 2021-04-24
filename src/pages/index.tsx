import { graphql } from "gatsby";
import React from "react";
import { useConfiguration, useSections, useSermons } from "../hooks";
import { Navigation } from "../components";
import { HiDownload } from "@react-icons/all-files/hi/HiDownload";

interface Query {
	site: {
		siteMetadata: {
			title: string;
			description: string;
		};
	};
}

const Home: React.FC<{ data: Query }> = () => {
	const sections = useSections();
	const { noticeSheet } = useConfiguration();
	const sermons = useSermons();

	return (
		<>
			<Navigation />
			<div
				className="h-screen bg-no-repeat bg-cover grid grid-cols-3"
				style={{
					backgroundImage:
						"linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/assets/front_church_header.jpg)",
				}}
			>
				<div className="col-span-1 flex flex-col justify-center items-center">
					<div className="bg-gray-50 p-4 rounded-lg flex justify-center items-center">
						<img src="/assets/FinalLogo.png" alt="Church logo" />
					</div>
					<div className="bg-gray-50 p-4 mt-5 rounded-lg flex justify-center items-center">
						<a className="" href={noticeSheet.file}>
							{noticeSheet.text}
						</a>
					</div>
				</div>
				<div className="col-span-2"></div>
			</div>
			{sections.map((x) => (
				<>
					<section key={x.id} className="m-auto max-w-xl p-4">
						<h2 className="text-3xl border-b-1 mb-2">{x.title}</h2>
						<hr className="mb-2"></hr>
						<div
							className="typography font-light text-base"
							dangerouslySetInnerHTML={{ __html: x.body }}
						/>
						{x.sermonManager && (
							<div className="shadow-md p-4 bg-gray-50 my-6">
								<h3 className="mb-2 font-bold">Sermons</h3>
								<ul>
									{sermons.map((x) => (
										<li key={x.id} className="">
											<a href={x.file} className="flex items-center">
												<HiDownload size={32} className="mr-2" />
												<div className="flex flex-col">
													<time>29th January 2021</time>
													<span>{x.title}</span>
												</div>
											</a>
										</li>
									))}
								</ul>
							</div>
						)}
					</section>
					{x.image && (
						<div
							className="h-64 bg-no-repeat bg-cover bg-fixed"
							style={{
								backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${x.image})`,
							}}
						></div>
					)}
				</>
			))}
		</>
	);
};

export default Home;

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;
