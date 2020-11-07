const path = require("path");

module.exports = {
  entry: [
      "./js/avatar.js",
      "./js/backend.js",
      "./js/colors.js",
      "./js/consts.js",
      "./js/debounce.js",
      "./js/dialog.js",
      "./js/game.js",
      "./js/move.js",
      "./js/render.js",
      "./js/setup.js",
      "./js/stats.js",
      "./js/utils.js",
      "./js/validate.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
};
