// Node modules
const merge = require("webpack-merge");

// Webpack plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// Config files
const common = require("./webpack.common.js");
const settings = require("./webpack.settings.js");

// Configure Clean webpack
const configureCleanWebpack = () => {
  return {
    cleanOnceBeforeBuildPatterns: settings.paths.dist.clean,
    verbose: true,
    dry: false,
  };
};

// Configure optimization
const configureOptimization = () => {
  return {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          },
          safe: true,
          discardComments: true,
        },
      }),
      new TerserPlugin(configureTerser()),
    ],
  };
};

// Configure terser
const configureTerser = () => {
  return {
    cache: true,
    parallel: true,
    sourceMap: true,
  };
};

// Production module exports
module.exports = () => {
  return [
    merge(common, {
      mode: "production",
      devtool: "source-map",
      optimization: configureOptimization(),
      module: {
        rules: [],
      },
      plugins: [new CleanWebpackPlugin(configureCleanWebpack())],
    }),
  ];
};
