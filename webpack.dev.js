// Node modules
const merge = require("webpack-merge");

// Config files
const common = require("./webpack.common.js");

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
module.exports = merge.smart(common, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [configureImageLoader()],
  },
});
