// Node modules
const merge = require("webpack-merge");

// Webpack plugins
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Config files
const devConfig = require("./webpack.dev.js");
const settings = require("./webpack.settings.js");

// Configure Clean webpack
const configureCleanWebpack = () => {
  return {};
};

// Configure the Postcss loader
const configurePostcssLoader = () => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      {
        loader: "style-loader",
      },
    ],
  };
};

const regex = new RegExp(/development/);
const development = process.argv.some((e) => regex.test(e));

const serverConfig = {
  output: {
    publicPath: settings.devServerConfig.public(),
  },
  devServer: {
    compress: true,
    contentBase: settings.paths.templates,
    disableHostCheck: development,
    host: settings.devServerConfig.host(),
    hot: true,
    port: settings.devServerConfig.port(),
    watchContentBase: true,
    writeToDisk: true,
  },
  module: {
    rules: [configurePostcssLoader()],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(configureCleanWebpack()),
  ],
};

// Development module exports
module.exports = merge.strategy({
  "module.rules": "prepend",
})(devConfig, serverConfig);
