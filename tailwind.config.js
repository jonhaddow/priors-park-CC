module.exports = {
	content: [
		"./src/components/*.{js,jsx,ts,tsx}",
		"./src/pages/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#27586b",
				"primary-dark": "#103e50",
				"primary-darker": "#0a2936",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
