// const colours = require("tailwindcss/colors");

const grey = {
  0: "#E6F5FF",
  1: "#C0D6E6",
  2: "#9DB9CC",
  3: "#7E9EB3",
  4: "#638399",
  5: "#4A6A80",
  6: "#3F5766",
  7: "#33424D",
  8: "#242D33",
  9: "#13171A",
  10: "#000000",
};

const red = {
  0: "#FFEBF0",
  1: "#F7BCCC",
  2: "#F090A9",
  3: "#E86689",
  4: "#E13F6A",
  5: "#D91A4D",
  6: "#B81641",
  7: "#971235",
  8: "#750E2A",
  9: "#540A1E",
  10: "#330612",
};

module.exports = {
  mode: "jit",
  content: ["./public/*.html", "./public/build/*.js"],
  theme: {
    extend: {
      colors: {
        white: grey[0],
        light: grey[1],
        dark: grey[7],
        black: grey[8],
        red,
      },
      transitionDuration: {
        1: "200ms",
        2: "400ms",
      },
    },
  },
  plugins: [],
};
