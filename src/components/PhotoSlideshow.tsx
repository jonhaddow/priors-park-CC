import React from "react";
import "react-slideshow-image/dist/styles.css";
import { useConfiguration } from "../hooks";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";

export const PhotoSlideshow: React.FC = () => {
	const {
		photoGallery: { photos },
	} = useConfiguration();

	return (
		<div className="h-80 w-96 p-6">
			{photos && (
				<CarouselProvider
					naturalSlideHeight={80}
					naturalSlideWidth={96}
					totalSlides={photos.length}
					infinite
					isPlaying
				>
					<Slider>
						{photos?.map((x, idx) => (
							<Slide
								key={x}
								index={idx}
								className="flex justify-center items-center rounded-lg"
							>
								<img src={x} alt="" className="max-h-full rounded-lg m-auto" />
							</Slide>
						))}
					</Slider>
				</CarouselProvider>
			)}
		</div>
	);
};
