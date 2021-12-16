const colours = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./public/*.html", "./public/build/*.js"],
  theme: {
    extend: {
      colors: {
        bg: colours.zinc[100],
        "bg-dark": colours.zinc[300],
        fg: colours.zinc[600],
        "fg-dark": colours.zinc[700],
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
