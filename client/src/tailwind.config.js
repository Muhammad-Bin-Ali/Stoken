const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      projectCyan: {
        light: "#416070",
        DEFAULT: "#1D4356",
        dark: "#0E1F27",
      },
      projectGold: {
        DEFAULT: "#CDB3A8",
        dark: "#AD978D",
      },
      white: colors.white,
      pink: "#EF7B81",
      beige: "#ECA388",
      gray: {
        DEFAULT: "#C7C7C7",
        dark: "#929292",
      },
      red: "#E72525",
    },
    extend: {
      fontFamily: {
        Gotham: ["Gotham", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 4px 27px rgba(0, 0, 0, 0.075)",
      },
      gridTemplateRows: {
        custom: "auto 1fr auto",
      },
      animation: {
        fadeIn: "fadeIn 0.1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      fill: ["hover"],
      transform: ["hover", "focus"],
      outline: {
        gold: ["1px solid #AD978D"],
        gray: ["1px solid #929292"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
