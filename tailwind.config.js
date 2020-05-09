const regex = new RegExp(/production/);
const production = process.argv.some((e) => regex.test(e));

module.exports = {
  target: "ie11",
  purge: {
    enabled: production,
    content: ["./templates/**/*.{html,twig}"],
  },
  theme: {},
  variants: {},
  plugins: [],
};
