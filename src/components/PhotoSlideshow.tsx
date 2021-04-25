import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { useConfiguration } from "../hooks";

export const PhotoSlideshow: React.FC = () => {
	const {
		photoGallery: { photos, timeBetweenPhotos },
	} = useConfiguration();

	return (
		<div className="h-80 w-96 shadow-lg">
			<Slide duration={(timeBetweenPhotos ?? 5) * 1000}>
				{photos?.map((x) => (
					<div
						key={x}
						className="h-80 w-96 bg-cover bg-no-repeat bg-center"
						style={{ backgroundImage: `url(${x})` }}
					/>
				))}
			</Slide>
		</div>
	);
};
