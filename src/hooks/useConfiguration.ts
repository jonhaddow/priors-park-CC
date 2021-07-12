import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface Query {
	noticeSheet: {
		frontmatter: {
			text?: string;
			file?: string;
		};
	};
	sectionOrder: {
		frontmatter: {
			order?: {
				section: string;
			}[];
		};
	};
	photoGallery: {
		frontmatter: {
			photos?: { image: { childImageSharp: IGatsbyImageData } }[];
		};
	};
}

interface Configuration {
	sectionOrder?: string[];
	noticeSheet: {
		file?: string;
		text?: string;
	};
	photoGallery: {
		photos?: { childImageSharp: IGatsbyImageData }[];
	};
}

export const useConfiguration = (): Configuration => {
	const query = useStaticQuery<Query>(graphql`
		query Config {
			noticeSheet: markdownRemark(
				fileAbsolutePath: { regex: "/config/notice-sheet/" }
			) {
				frontmatter {
					text
					file
				}
			}
			sectionOrder: markdownRemark(
				fileAbsolutePath: { regex: "/config/section-order/" }
			) {
				frontmatter {
					order {
						section
					}
				}
			}
			photoGallery: markdownRemark(
				fileAbsolutePath: { regex: "/config/photo-gallery/" }
			) {
				frontmatter {
					photos {
						image {
							childImageSharp {
								gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
							}
						}
					}
				}
			}
		}
	`);

	return {
		sectionOrder: query.sectionOrder.frontmatter.order?.map((x) => x.section),
		noticeSheet: {
			file: query.noticeSheet.frontmatter.file,
			text: query.noticeSheet.frontmatter.text,
		},
		photoGallery: {
			photos: query.photoGallery.frontmatter.photos?.map((x) => x.image),
		},
	};
};
