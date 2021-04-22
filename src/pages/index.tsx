import { graphql } from "gatsby";
import React from "react";
import { useSections } from "../hooks";

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

	return (
		<>
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
