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
        bounce: "bounce 1s linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        bounce: {
          "0%, 100%": {
            transform: " translateY(0)",
          },
          "50%": {
            transform: "translate(-20px)",
          },
        },
      },
    },
  },
  plugins: [],
}

