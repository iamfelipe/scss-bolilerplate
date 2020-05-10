const regex = new RegExp(/production/);
const production = process.argv.some((e) => regex.test(e));

module.exports = {
  target: "ie11",
  purge: {
    enabled: production,
    content: ["./templates/**/*.{html,twig}"],
  },
  theme: {
    extend: {
      colors: {
        black: "var(--color-black)",
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
        "5xl": "var(--text-5xl)",
        "6xl": "var(--text-6xl)",
      },
    },
  },
  variants: {},
  plugins: [],
};
