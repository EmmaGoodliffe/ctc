const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./public/*.html", "./public/build/*.js"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
