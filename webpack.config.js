const path = require("path");

module.exports = {
  entry: "src/index.js",
  output: {
    path: path.resolve(__dirname, "/distributable/"),
    filename: "index-emitted.bundle.js",
  },
  module: {
    rules: [
      {
        use: "raw-loader",
      },
    ],
  },
};
