// Node modules
const merge = require("webpack-merge");
const path = require("path");

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

// Configure the webpack-dev-server
const configureDevServer = () => {
  return {
    contentBase: path.resolve(__dirname, settings.paths.templates),
    host: settings.devServerConfig.host(),
    port: settings.devServerConfig.port(),
    disableHostCheck: true,
    hot: true,
    overlay: true,
    https: true,
    watchContentBase: true,
    watchOptions: {
      poll: !!parseInt(settings.devServerConfig.poll()),
      ignored: /node_modules/,
    },
    writeToDisk: false,
    compress: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
};

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    publicPath: settings.devServerConfig.public(),
  },
  devServer: configureDevServer(),
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
