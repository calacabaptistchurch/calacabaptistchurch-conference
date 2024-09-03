/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deepRed: "#8b1c31", // Extracted deep red from the background
        deepPurple: "#4b2245", // Extracted deep purple from the background
        brightYellow: "#ffcc00", // Extracted bright yellow from the text highlight
        white: "#ffffff", // White for primary text
        lightGreen: "#b5d3b3", // Light pastel green accents
        lightGray: "#d3d3d3", // Light gray for secondary text
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [],
};
