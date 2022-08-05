/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundDarker: "#0C0C1D",
        backgroundDark: "#181829",
        backgroundLighter: "#F9F9F9",
        backgroundLight: "#E4E4E6",
      },
    },
  },
  plugins: [],
};
