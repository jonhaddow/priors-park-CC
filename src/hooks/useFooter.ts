import { graphql, useStaticQuery } from "gatsby";

interface Query {
	allMarkdownRemark: {
		nodes: {
			id: string;
			frontmatter: {
				title: string;
				footer_order: number;
			};
			html: string;
		}[];
	};
}

interface FooterGroup {
	id: string;
	title: string;
	order: number;
	html: string;
}

export const useFooter = (): { groups: FooterGroup[] } => {
	const data = useStaticQuery<Query>(graphql`
		query FooterLinks {
			allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "/footer-links/" } }
				sort: { fields: frontmatter___footer_order }
			) {
				nodes {
					id
					frontmatter {
						title
						footer_order
					}
					html
				}
			}
		}
	`);

	return {
		groups: data.allMarkdownRemark.nodes.map((x) => ({
			html: x.html,
			id: x.id,
			order: x.frontmatter.footer_order,
			title: x.frontmatter.title,
		})),
	};
};
