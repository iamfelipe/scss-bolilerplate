// webpack.settings.js - webpack settings config

// Node modules
require("dotenv").config();

// Webpack settings exports
module.exports = {
  copyright: "Serempre",
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
  urls: {
    publicPath: () => process.env.PUBLIC_PATH || "/dist/",
  },
  entries: {
    main: ["index.js"],
  },
  babelLoaderConfig: {
    exclude: [/(node_modules)/],
  },
  devServerConfig: {
    public: () => process.env.DEVSERVER_PUBLIC || "http://localhost:8080",
    proxy: () =>
      process.env.DEVSERVER_PROXY ||
      console.warn(
        "⚠️ Add an .env file at the theme's root with a valid DEVSERVER_PROXY ⚠️\nEj: DEVSERVER_PROXY='https://url.dd:0000/'️️"
      ),
    host: () => process.env.DEVSERVER_HOST || "localhost",
    port: () => process.env.DEVSERVER_PORT || 8080,
    https: () => process.env.DEVSERVER_HTTPS || false,
  },
  manifestConfig: {
    basePath: "",
  },
  purgeCssConfig: {
    paths: ["./templates/**/*.{twig,html}"],
  },
};
