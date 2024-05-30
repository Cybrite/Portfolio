/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        His: ["Montserrat"],
      },
      animation: {
        fadeIn: "fadeIn 3s linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
