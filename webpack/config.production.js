// You can add other webpack configuration (plugins, loaders, etc).
// Apart from ES6 Import/Export, Gulp was able to do all my other work so this file is mainly empty.

const entry = require("./entry");
const output = require("./output");

module.exports = {
  entry,
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.ts?$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output
};
