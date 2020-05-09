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
  manifestConfig: {
    basePath: "",
  },
};
