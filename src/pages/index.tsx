import { graphql } from "gatsby";
import React from "react";
import { useConfiguration, useSections } from "../hooks";
import { Navigation } from "../components";

interface Query {
	site: {
		siteMetadata: {
			title: string;
			description: string;
		};
	};
}

const Home: React.FC<{ data: Query }> = ({
	data: {
		site: { siteMetadata },
	},
}) => {
	const sections = useSections();
	const { noticeSheet } = useConfiguration();

	return (
		<>
			<Navigation />
			<div
				className="h-screen bg-no-repeat bg-cover grid grid-cols-3"
				style={{
					backgroundImage:
						"linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/img/front_church_header.jpg)",
				}}
			>
				<div className="col-span-1 flex flex-col justify-center items-center">
					<div className="bg-gray-50 p-4 rounded-lg flex justify-center items-center">
						<img src="/img/FinalLogo.png" alt="Church logo" />
					</div>
					<div className="bg-gray-50 p-4 mt-5 rounded-lg flex justify-center items-center">
						<a className="" href={noticeSheet.file}>
							{noticeSheet.text}
						</a>
					</div>
				</div>
				<div className="col-span-2"></div>
			</div>
			<h1>{siteMetadata.title}</h1>
			<p>{siteMetadata.description}</p>
			<ul>
				{sections.map((x) => (
					<li key={x.id}>{x.title}</li>
				))}
			</ul>
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
