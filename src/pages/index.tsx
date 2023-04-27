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
		// eslint-disable-next-line @typescript-eslint/no-explicit-any -- BgImage types are wrong.
	].reverse() as any;

	const bgImageProps = {
		image: backgroundFluidImageStack,
	} as IBgImageProps;

	return (
		<div className="">
			<Metadata {...siteMetadata} />
			<Navigation navRef={navRef} onNavigate={executeScroll} />
			<BgImage
				{...bgImageProps}
				// @ts-expect-error -- BgImage has the wrong types
				className="bg-cover bg-no-repeat pt-14"
			>
				<div
					ref={(r: HTMLDivElement) =>
						sectionRefs.current.push({ id: "home", elRef: r })
					}
					className="flex flex-wrap items-center justify-center gap-16 p-16"
				>
					<div className="flex items-center justify-center rounded-lg bg-gray-50 p-2">
						<StaticImage
							src="../assets/FinalLogo.png"
							alt="Church logo"
							placeholder="blurred"
							layout="fixed"
							width={250}
							height={180}
						/>
					</div>
					<div className="flex flex-col gap-4">
						<a
							href="https://square.link/u/1C92EgRJ"
							className="flex h-16 w-56 items-center justify-center rounded-md bg-primary p-2 font-bold text-white shadow-sm transition-colors hover:bg-primary-dark hover:underline focus:bg-primary-dark focus:underline"
						>
							Donate
						</a>
						<a
							className="mt-5 flex h-16 w-56 items-center justify-center rounded-md bg-white p-2 text-center font-bold text-primary transition-colors hover:bg-gray-200 hover:underline focus:bg-gray-200 focus:underline"
							href={noticeSheet.file}
						>
							{noticeSheet.text}
						</a>
					</div>
				</div>
			</BgImage>
			<div className="hidden h-80 w-full items-center justify-center bg-primary-dark p-8 md:flex">
				<div className="items-center justify-center overflow-hidden">
					<PhotoSlideshow />
				</div>
			</div>
			{sections.map((section) => {
				let bgImageProps: IBgImageProps | undefined = undefined;

				if (section.image) {
					const backgroundFluidImageStack = [
						getImage(section.image.childImageSharp),
						// eslint-disable-next-line @typescript-eslint/no-explicit-any -- BgImage types are wrong.
					].reverse() as any;

					bgImageProps = {
						image: backgroundFluidImageStack,
					} as IBgImageProps;
				}

				return (
					<Fragment key={section.id}>
						<Section section={section} sectionRefs={sectionRefs} />
						{bgImageProps !== undefined && (
							<BgImage
								{...bgImageProps}
								// @ts-expect-error -- BgImage has the wrong types
								className="h-64 bg-cover bg-no-repeat shadow-lg saturate-200 md:bg-fixed"
							/>
						)}
					</Fragment>
				);
			})}
			<Footer />
		</div>
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
