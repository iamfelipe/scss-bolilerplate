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

// Configure Image loader
const configureImageLoader = () => {
  return {
    test: /\.(png|jpe?g|gif|svg|webp)$/i,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "img/[name].[ext]?[contenthash:4]",
        },
      },
    ],
  };
};

// Development module exports
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [configureImageLoader()],
  },
  plugins: [new CleanWebpackPlugin(configureCleanWebpack())],
});
