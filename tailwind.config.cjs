/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PT Sans", "sans-serif"],
      },
      keyframes: {
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0)",
          },
          to: {
            opacity: "0",
            transform: "translateY(40%)",
          },
        },
        "make-it-bigger": {
          "0%": {
            transform: "translateY(0%)",
          },
          "80%": {
            transform: "translateY(-30%)",
          },
          "90%": {
            transform: "translateY(-10%) scale(1.75)",
          },
          "100%": {
            transform: "translateY(0%) scale(2)",
            opacity: 0.3,
            zIndex: -1,
          },
        },
      },
      animation: {
        "fade-out-down": "fade-out-down linear forwards",
        "make-it-bigger": "make-it-bigger linear forwards",
      },
      supports: {
        "no-scroll-driven-animations": "not(animation-timeline: scroll())",
      },
    },
  },
  plugins: [],
};
