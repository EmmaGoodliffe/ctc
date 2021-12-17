const colours = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./public/*.html", "./public/build/*.js"],
  theme: {
    extend: {
      colors: {
        gs: {
          1: colours.zinc[100],
          2: colours.zinc[300],
          3: colours.zinc[600],
          4: colours.zinc[700],
        },
      },
      transitionDuration: {
        1: "200ms",
        2: "400ms",
        3: "600ms",
      },
    },
  },
  plugins: [],
};
