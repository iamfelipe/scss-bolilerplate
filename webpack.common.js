// Node modules
const path = require("path");

// Webpack plugins
const ManifestPlugin = require("webpack-manifest-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");

// Config files
const pkg = require("./package.json");
const settings = require("./webpack.settings.js");

// Configure Babel loader
const configureBabelLoader = () => {
  return {
    test: /\.js$/,
    exclude: settings.babelLoaderConfig.exclude,
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        presets: [
          [
            "@babel/preset-env",
            {
              modules: false,
              corejs: {
                version: 2,
                proposals: true,
              },
              useBuiltIns: "usage",
            },
          ],
        ],
        plugins: [
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-transform-runtime",
        ],
      },
    },
  };
};

// Configure Entries
const configureEntries = () => {
  let entries = {};
  for (const [key, value] of Object.entries(settings.entries)) {
    entries[key] = path.resolve(__dirname, settings.paths.src.js + value);
  }
  return entries;
};

// Configure the Postcss loader
const configurePostcssLoader = () => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: true,
        },
      },
      {
        loader: "sass-loader",
        options: { sourceMap: true },
      },
    ],
  };
};

// Configure Font loader
const configureFontLoader = () => {
  return {
    test: /\.(ttf|eot|woff|woff2?)$/i,
    exclude: /img/,
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 50000,
          name: "fonts/[name].[ext]",
        },
      },
    ],
  };
};

// Configure Manifest
const configureManifest = (fileName) => {
  return {
    fileName: fileName,
    basePath: settings.manifestConfig.basePath,
    map: (file) => {
      file.name = file.name.replace(/(\.[a-f0-9]{32})(\..*)$/, "$2");
      return file;
    },
  };
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
  module: {
    rules: [
      configurePostcssLoader(),
      configureBabelLoader(),
      configureFontLoader(),
    ],
  },
  plugins: [
    new ManifestPlugin(configureManifest("manifest.json")),
    new WebpackNotifierPlugin({
      title: "Webpack",
      excludeWarnings: true,
      alwaysNotify: true,
    }),
  ],
};
