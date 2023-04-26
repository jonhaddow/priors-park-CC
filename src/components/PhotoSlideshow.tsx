import React from "react";
import { useConfiguration } from "../hooks";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";

export const PhotoSlideshow: React.FC = () => {
	const {
		photoGallery: { photos },
	} = useConfiguration();

	return (
		<div className="h-64 min-h-full w-96 overflow-hidden">
			{photos && (
				<CarouselProvider
					naturalSlideHeight={80}
					naturalSlideWidth={96}
					totalSlides={photos.length}
					infinite
					isPlaying
				>
					<Slider>
						{photos
							?.map((x) => getImage(x.childImageSharp))
							.filter((x) => x !== undefined)
							.map((x, idx) => (
								<Slide
									key={idx}
									index={idx}
									className="flex items-center justify-center"
								>
									<GatsbyImage
										image={x as IGatsbyImageData}
										alt=""
										className="m-auto h-full max-h-full"
									/>
								</Slide>
							))}
					</Slider>
				</CarouselProvider>
			)}
		</div>
	);
};
