const path = require("path");

module.exports = {
  entry: "./src/loading.js",
  mode: "development",
  output: {
    filename:
      process.env.NODE_ENV === "production"
        ? "jquery.loading.min.js"
        : "jquery.loading.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd"
  },
  externals: {
    jquery: {
      root: "jQuery",
      commonjs: "jquery",
      commonjs2: "jquery",
      amd: "jquery"
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
