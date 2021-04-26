import React from "react";
import { Helmet } from "react-helmet";

interface MetadateProps {
	title: string;
	description: string;
	url: string;
}

export const Metadata: React.FC<MetadateProps> = ({
	title,
	description,
	url,
}) => {
	return (
		<Helmet
			htmlAttributes={{
				lang: "en",
			}}
		>
			<title>{title}</title>
			<link rel="canonical" href={url} />
			<meta name="description" content={description} />
			<meta property="og:locale" content="en_GB" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={`${title} - ${description}`} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:site_name" content={title} />
			<meta name="twitter:card" content="summary_large_image" />
			<link
				rel="icon"
				href="/assets/icon/cropped-FinalLogo-32x32.png"
				sizes="32x32"
			/>
			<link
				rel="icon"
				href="/assets/icon/cropped-FinalLogo-192x192.png"
				sizes="192x192"
			/>
			<link
				rel="apple-touch-icon"
				href="/assets/icon/cropped-FinalLogo-180x180.png"
			/>
			<meta
				name="msapplication-TileImage"
				content="/assets/icon/cropped-FinalLogo-270x270.png"
			/>
		</Helmet>
	);
};
