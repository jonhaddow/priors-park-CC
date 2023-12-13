/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#E9D758",
        "light-text": "#D1DEDE",
        primary: "#297373",
        "primary-dark": "#246464",
        "primary-darker": "#1B4B4B",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
