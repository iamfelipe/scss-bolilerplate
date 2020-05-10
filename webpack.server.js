// Node modules
const merge = require("webpack-merge");

// Webpack plugins
const webpack = require("webpack");

// Config files
const devConfig = require("./webpack.dev.js");
const settings = require("./webpack.settings.js");

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

const serverConfig = {
  devServer: {
    hot: true,
    compress: true,
    contentBase: settings.paths.templates,
    port: settings.devServerConfig.port(),
    watchContentBase: true,
  },
  module: {
    rules: [configurePostcssLoader()],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

// Development module exports
module.exports = merge.strategy({
  "module.rules": "prepend",
})(devConfig, serverConfig);
