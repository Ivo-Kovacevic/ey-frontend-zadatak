/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        squish: {
          "50%": {
            transform: "scaleX(1.2) scaleY(0.8)",
          },
        },
      },
      animation: {
        squish: "squish 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
