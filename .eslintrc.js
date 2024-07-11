module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["html"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  // I've added these to deal with ESLint warnings
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  rules: {}, // Maybe create rules similar to PEP8
};
 