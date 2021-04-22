module.exports = {
	siteMetadata: {
		title: "Priors Park Community Church",
		description: "The heart of the community",
	},
	plugins: [
		"gatsby-plugin-typescript",
		`gatsby-plugin-eslint`,
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sass",
		`gatsby-transformer-yaml`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./src/config`,
				name: "config",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/pages`,
				name: "pages",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/sections`,
				name: "sections",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/sermons`,
				name: "sermons",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-relative-images",
						options: {
							name: "uploads",
						},
					},
					{
						resolve: "gatsby-remark-images",
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048,
						},
					},
					{
						resolve: "gatsby-remark-copy-linked-files",
						options: {
							destinationDir: "static",
						},
					},
				],
			},
		},
		"gatsby-plugin-netlify-cms",
		"gatsby-plugin-netlify", // make sure to keep it last in the array
	],
};
