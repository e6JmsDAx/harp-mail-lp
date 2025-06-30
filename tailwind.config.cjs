/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./node_modules/harp-design-system/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        harpPurple: "#7c3aed",
        harpLight:  "#f3e8ff",
      },
    },
  },
  plugins: [],
};
