// Node modules
const merge = require("webpack-merge");

// Webpack plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Config files
const common = require("./webpack.common.js");

// Configure Clean webpack
const configureCleanWebpack = () => {
  return {
    cleanStaleWebpackAssets: false,
  };
};

// Development module exports
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [new CleanWebpackPlugin(configureCleanWebpack())],
});
