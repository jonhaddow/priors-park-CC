import { graphql } from "gatsby";
import React, { Fragment, useRef } from "react";
import { useConfiguration, useSections } from "../hooks";
import {
	Footer,
	Metadata,
	Navigation,
	PhotoSlideshow,
	Section,
} from "../components";
import { BgImage, IBgImageProps } from "gbimage-bridge";
import { getImage, IGatsbyImageData, StaticImage } from "gatsby-plugin-image";

interface Query {
	site: {
		siteMetadata: {
			title: string;
			description: string;
			url: string;
		};
	};
	header: {
		childImageSharp: IGatsbyImageData;
	};
}

const Home: React.FC<{ data: Query }> = ({
	data: {
		site: { siteMetadata },
		header,
	},
}) => {
	const sections = useSections();
	const { noticeSheet } = useConfiguration();
	const navRef = useRef<HTMLElement>(null);
	const sectionRefs = useRef<{ id: string; elRef: HTMLElement | null }[]>([]);

	const executeScroll = (sectionId: string): void => {
		const sectionRef = sectionRefs.current.find((x) => x.id === sectionId);
		if (sectionRef?.elRef && navRef.current) {
			window.scrollTo({
				behavior: "smooth",
				left: 0,
				top: sectionRef.elRef.offsetTop - navRef.current.offsetHeight,
			});
		}
	};

	const backgroundFluidImageStack = [
		getImage(header.childImageSharp),
		`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))`,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any -- BgImage types are wrong.
	].reverse() as any;

	const bgImageProps = {
		image: backgroundFluidImageStack,
		className: "h-screen bg-no-repeat bg-cover grid grid-cols-5",
	} as IBgImageProps;

	return (
		<>
			<Metadata {...siteMetadata} />
			<Navigation navRef={navRef} onNavigate={executeScroll} />
			<BgImage {...bgImageProps}>
				<div
					ref={(r: HTMLDivElement) =>
						sectionRefs.current.push({ id: "home", elRef: r })
					}
					className="col-span-5 md:col-span-2 flex flex-col justify-center items-center p-6"
				>
					<div className="bg-gray-50 p-2 rounded-lg flex justify-center items-center">
						<StaticImage
							src="../assets/FinalLogo.png"
							alt="Church logo"
							placeholder="blurred"
							layout="fixed"
							width={250}
							height={180}
						/>
					</div>
					<div className="bg-gray-50 p-4 mt-5 rounded-lg flex justify-center items-center">
						<a className="hover:text-primary" href={noticeSheet.file}>
							{noticeSheet.text}
						</a>
					</div>
				</div>
				<div className="col-span-3 justify-center items-center hidden md:flex">
					<PhotoSlideshow />
				</div>
			</BgImage>
			{sections.map((section) => (
				<Fragment key={section.id}>
					<Section section={section} sectionRefs={sectionRefs} />
					{section.image && (
						<div
							className="h-64 bg-no-repeat bg-cover md:bg-fixed"
							style={{
								backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${section.image})`,
							}}
						></div>
					)}
				</Fragment>
			))}
			<Footer />
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
				url
			}
		}
		header: file(absolutePath: { regex: "src/assets/front_church_header/" }) {
			childImageSharp {
				gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
			}
		}
	}
`;
