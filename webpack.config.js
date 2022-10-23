const path = require("path");
module.unknownContextCritical = false;
module.exports = {
  entry: "./src/main.tsx",
  output: {
    filename: "bundle.js", // all js files are bundled into this single file
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  devServer: {
    static: "./dist",
    port: 9000, //default port: 8080
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
