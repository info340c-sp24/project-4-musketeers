import withMT from "@material-tailwind/html/utils/withMT";

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'piano-blue': '#2f3c7e', // For piano and harp
        'vocals-creme': '#fbeaeb', // For vocals
        'light-blue': '#8aaae5', // For E-Guitar
        'pale-gray': '#cfcfcf', // For EDM
        'light-pink': '#fbeaeb' // For RAP
      },
    }
  },
  variants: {},
  plugins: [],
});
