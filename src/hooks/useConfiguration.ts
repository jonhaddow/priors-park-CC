import { graphql, useStaticQuery } from "gatsby";

interface Query {
	allConfigYaml: {
		edges: {
			node: {
				parent: {
					name: string;
				};
				order?: {
					section: string;
				}[];
				text?: string;
				file?: string;
				time_between_photos?: number;
				photos?: { image: string }[];
			};
		}[];
	};
}

interface Configuration {
	sectionOrder?: string[];
	noticeSheet: {
		file?: string;
		text?: string;
	};
	photoGallery: {
		timeBetweenPhotos?: number;
		photos?: string[];
	};
}

export const useConfiguration = (): Configuration => {
	const query = useStaticQuery<Query>(graphql`
		query Config {
			allConfigYaml {
				edges {
					node {
						id
					}
				}
			}
		}
	`);

	const sectionOrderConfig = query.allConfigYaml.edges.find(
		(x) => x.node.parent.name === "section-order"
	);
	const noticeSheetConfig = query.allConfigYaml.edges.find(
		(x) => x.node.parent.name === "notice-sheet"
	);
	const photoGalleryConfig = query.allConfigYaml.edges.find(
		(x) => x.node.parent.name === "photo-gallery"
	);

	return {
		sectionOrder: sectionOrderConfig?.node.order?.map((x) => x.section),
		noticeSheet: {
			file: noticeSheetConfig?.node.file,
			text: noticeSheetConfig?.node.text,
		},
		photoGallery: {
			photos: photoGalleryConfig?.node.photos?.map((x) => x.image),
			timeBetweenPhotos: photoGalleryConfig?.node.time_between_photos,
		},
	};
};
