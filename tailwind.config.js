/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myGrey: "#18191a",
        darkBlue: "#292d3e",
        darkerBlue: "#2b3042",
        myBlue: "#148ad3"
      }
    },
  },
  plugins: [],
};
