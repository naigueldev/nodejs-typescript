/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "standard",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {},
};
