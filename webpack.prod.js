// Node modules
const path = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const git = require("git-rev-sync");
const moment = require("moment");

// Webpack plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Config files
const commonConfig = require("./webpack.common.js");
const settings = require("./webpack.settings.js");
const pkg = require("./package.json");

// Configure file banner
const configureBanner = () => {
  return {
    banner: [
      "/*!",
      " * @project        " + pkg.name,
      " * @name           " + "[filebase]",
      " * @author         " + pkg.author.name,
      " * @build          " + moment().format("llll") + " ET",
      " * @release        " + git.long() + " [" + git.branch() + "]",
      " * @copyright      Copyright (c) " +
        moment().format("YYYY") +
        " " +
        pkg.author.name,
      " *",
      " */",
      "",
    ].join("\n"),
    raw: true,
  };
};

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

const prodConfig = {
  mode: "production",
  devtool: "source-map",
  optimization: configureOptimization(),
  module: {
    rules: [configureImageLoader(), configurePostcssLoader()],
  },
  plugins: [
    new webpack.BannerPlugin(configureBanner()),
    new CleanWebpackPlugin(configureCleanWebpack()),
    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, settings.paths.dist.base),
      filename: path.join("./css", "[name].css?[contenthash:4]"),
    }),
  ],
};

// Production module exports
module.exports = merge.strategy({
  "module.rules": "prepend",
})(commonConfig, prodConfig);
