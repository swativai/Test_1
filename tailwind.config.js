/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // for JavaScript and TypeScript files
    "./public/index.html", // for the main HTML file
  ],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      lineHeight: {
        "custom-27": "27px",
      },
    },
  },
  plugins: [],
};
