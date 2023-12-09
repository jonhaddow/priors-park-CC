/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
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
