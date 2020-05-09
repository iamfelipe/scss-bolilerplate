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
      {
        loader: "img-loader",
        options: {
          plugins: [
            require("imagemin-gifsicle")({
              interlaced: true,
            }),
            require("imagemin-mozjpeg")({
              progressive: true,
              arithmetic: false,
            }),
            require("imagemin-optipng")({
              optimizationLevel: 5,
            }),
            require("imagemin-svgo")({
              plugins: [{ convertPathData: false }],
            }),
          ],
        },
      },
    ],
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
        rules: [configureImageLoader()],
      },
      plugins: [new CleanWebpackPlugin(configureCleanWebpack())],
    }),
  ];
};
