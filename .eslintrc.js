module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    es2021: true,
    browser: false,
    node: true,
  },
  extends: [
    "eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:cypress/recommended", "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-multi-spaces": ["error"],
    "simple-import-sort/imports": "error",
    "array-element-newline": ["error", "never"],
    indent: ["error", 2],
  },
  overrides: [
    // override "simple-import-sort" config
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error", {
            groups: [
              [
                "^react$", "^views", "^components", "^@mui", "^react", "^@?\\w", "^./queries", "^interfaces", "(^|\\W)interfaces(?:$|\\W)", "^utils/", "^./", "^assets", "^\\.", "^.+\\.s?css$",
              ],
            ],
          },
        ],
      },
    },
  ],
};
