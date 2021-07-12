import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { useConfiguration } from ".";

interface Query {
	allMarkdownRemark: {
		nodes: {
			id: string;
			html: string;
			frontmatter: {
				title: string;
				image: { childImageSharp: IGatsbyImageData };
				sermon_manager: boolean | null;
			};
		}[];
	};
}

export interface Section {
	id: string;
	title: string;
	body: string;
	image: { childImageSharp: IGatsbyImageData };
	sermonManager: boolean | null;
}

export const useSections = (): Section[] => {
	const { sectionOrder } = useConfiguration();
	const query = useStaticQuery<Query>(graphql`
		query {
			allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/sections/" } }) {
				nodes {
					id
					frontmatter {
						title
						image {
							childImageSharp {
								gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
							}
						}
						sermon_manager
					}
					html
				}
			}
		}
	`);

	const sections = query.allMarkdownRemark.nodes.map((x) => ({
		id: x.id,
		body: x.html,
		image: x.frontmatter.image,
		title: x.frontmatter.title,
		sermonManager: x.frontmatter.sermon_manager,
	}));

	if (sectionOrder) {
		sections.sort((a, b) => {
			if (!sectionOrder.includes(a.title)) return 1;
			if (!sectionOrder.includes(b.title)) return -1;
			return sectionOrder.indexOf(a.title) - sectionOrder.indexOf(b.title);
		});
	}

	return sections;
};
