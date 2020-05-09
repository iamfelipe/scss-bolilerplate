// Node modules
const merge = require("webpack-merge");

// Config files
const common = require("./webpack.common.js");

// Development module exports
module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
});
