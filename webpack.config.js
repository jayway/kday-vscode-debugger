const path = require("path");

module.exports = {
  mode: "none",
  devtool: "source-map",
  entry: "./babel/src/index.js",
  output: {
    path: path.resolve(__dirname, "babel/public"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /.js/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'babel/public'),
    compress: true,
    port: 9000
  }
};