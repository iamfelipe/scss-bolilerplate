// Node modules
const path = require("path");

// Config files
const pkg = require("./package.json");
const settings = require("./webpack.settings.js");

// Configure Entries
const configureEntries = () => {
  let entries = {};
  for (const [key, value] of Object.entries(settings.entries)) {
    entries[key] = path.resolve(__dirname, settings.paths.src.js + value);
  }
  return entries;
};

// Common module exports
module.exports = {
  name: pkg.name,
  entry: configureEntries(),
  output: {
    path: path.resolve(__dirname, settings.paths.dist.base),
    publicPath: settings.urls.publicPath(),
    filename: path.join("./js", "[name].bundle.js"),
  },
};
