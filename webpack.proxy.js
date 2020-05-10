// Node modules
const path = require("path");
const merge = require("webpack-merge");

// Webpack plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Config files
const devConfig = require("./webpack.dev.js");
const settings = require("./webpack.settings.js");

// Configure the Postcss loader
const configurePostcssLoader = () => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
    ],
  };
};

// Configure Clean webpack
const configureCleanWebpack = () => {
  return {
    cleanStaleWebpackAssets: false,
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

proxyConfig = {
  module: {
    rules: [configurePostcssLoader()],
  },
  plugins: [
    new BrowserSyncPlugin(configureBrowserSync()),
    new CleanWebpackPlugin(configureCleanWebpack()),
    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, settings.paths.dist.base),
      filename: path.join("./css", "[name].css?[contenthash:4]"),
    }),
  ],
};

// Development module exports
module.exports = merge.strategy({
  "module.rules": "prepend",
})(devConfig, proxyConfig);
