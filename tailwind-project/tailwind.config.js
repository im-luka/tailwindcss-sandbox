/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito Sans", "sans-serif"],
        title: ["Crimson Text", "serif"],
      },
      backgroundColor: {
        main: "#32FCF6",
      },
      colors: {
        main: "#11FCD6",
      },
      spacing: {
        128: "128rem",
      },
    },
  },
  plugins: [],
};
