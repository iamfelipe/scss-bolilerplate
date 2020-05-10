// Node modules
const merge = require("webpack-merge");

// Webpack plugins
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

// Config files
const common = require("./webpack.common.js");
const settings = require("./webpack.settings.js");

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

// Configure Browser Sync
const configureBrowserSync = () => {
  return {
    host: settings.devServerConfig.host(),
    port: settings.devServerConfig.port(),
    proxy: settings.devServerConfig.proxy(),
    files: [`./${settings.paths.templates}/**/*.{twig,html}`],
    open: false,
    reloadOnRestart: true,
  };
};

// Development module exports
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [configureImageLoader()],
  },
  devServer: {
    contentBase: settings.paths.templates,
    hot: true,
    inline: true,
    port: settings.devServerConfig.port(),
    watchContentBase: true,
  },
  plugins: [
    new BrowserSyncPlugin(configureBrowserSync()),
    new CleanWebpackPlugin(configureCleanWebpack()),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
