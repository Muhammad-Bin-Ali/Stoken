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
    },
    extend: {
      fontFamily: {
        Gotham: ["Gotham", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 4px 27px rgba(0, 0, 0, 0.06)",
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
