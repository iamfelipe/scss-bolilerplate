// Node modules
const merge = require("webpack-merge");

// Webpack plugins
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Config files
const commonConfig = require("./webpack.common.js");
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

const regex = new RegExp(/development/);
const development = process.argv.some((e) => regex.test(e));

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
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
    rules: [configurePostcssLoader(), configureImageLoader()],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(configureCleanWebpack()),
  ],
};

// Development module exports
module.exports = merge.strategy({
  "module.rules": "prepend",
})(commonConfig, devConfig);
