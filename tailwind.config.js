/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile_s: "481px",
        mobile_b: "769px",
        tablet: "1025px",
        laptop: "1281px",
        desktop: "1537px",
      },
    },
  },
  plugins: [],
};
