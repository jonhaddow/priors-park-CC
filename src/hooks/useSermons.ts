import { graphql, useStaticQuery } from "gatsby";

interface Query {
	allMarkdownRemark: {
		nodes: {
			id: string;
			frontmatter: {
				title: string;
				file: string;
				published: string;
			};
		}[];
	};
}

interface Sermon {
	id: string;
	title: string;
	file: string;
	published: string;
}

export const useSermons = (): Sermon[] => {
	const query = useStaticQuery<Query>(graphql`
		query {
			allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/sermons/" } }) {
				nodes {
					id
					frontmatter {
						title
						file
						published
					}
				}
			}
		}
	`);

	const sermons = query.allMarkdownRemark.nodes.map((x) => ({
		id: x.id,
		file: x.frontmatter.file,
		title: x.frontmatter.title,
		published: x.frontmatter.published,
	}));

	return sermons;
};
