// webpack.settings.js - webpack settings config

// Node modules
require("dotenv").config();

// Webpack settings exports
module.exports = {
  paths: {
    src: {
      base: "./src/",
      css: "./src/css/",
      js: "./src/js/",
    },
    dist: {
      base: "./dist/",
      clean: ["**/*"],
    },
    templates: "./templates/",
  },
  devServerConfig: {
    public: () => process.env.DEVSERVER_PUBLIC || "http://localhost:8080",
    host: () => process.env.DEVSERVER_HOST || "localhost",
    poll: () => process.env.DEVSERVER_POLL || false,
    port: () => process.env.DEVSERVER_PORT || 8080,
    https: () => process.env.DEVSERVER_HTTPS || true,
  },
  urls: {
    publicPath: () => process.env.PUBLIC_PATH || "/dist/",
  },
  entries: {
    main: ["index.js"],
  },
  babelLoaderConfig: {
    exclude: [/(node_modules)/],
  },
  copyWebpackConfig: [
    {
      from: "./src/static/**/*",
      to: "[folder]/[name].[ext]?[contenthash]",
      flatten: true,
    },
  ],
  manifestConfig: {
    basePath: "",
  },
  purgeCssConfig: {
    paths: ["./templates/**/*.{twig,html}"],
  },
};
