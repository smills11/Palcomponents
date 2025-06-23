import { FlatCompat } from "@eslint/eslintrc";
import babelEslintParser from "@babel/eslint-parser";

const compat = new FlatCompat();

export default [
  {
    ignores: ["eslint.config.mjs", "vite.config.js"],
  },
  {
    languageOptions: {
      parser: babelEslintParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    files: ["*/**/*.jsx", "*/**/*.jsx"],
    settings: {
      react: {
        pragma: "React",
        version: "detect",
      },
      "import/extensions": [".js", ".jsx"],
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
        },
      },
      "import/parser": {
        "@babel/eslint-parser": [".js", ".jsx", ".json"],
      },
    },
  },
  ...compat.config({
    extends: ["airbnb", "plugin:prettier/recommended"],
    env: {
      es2020: true,
      node: true,
      jest: true,
      browser: true,
    },
    globals: {},
    rules: {
      "react/function-component-definition": [0],
      "react/jsx-uses-vars": "error",
      "react/button-has-type": [0],
      "react/jsx-props-no-spreading": [0],
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "React",
        },
      ],
      "react/jsx-filename-extension": [0],
      "react/require-default-props": [1, { ignoreFunctionalComponents: true }],
      "react/default-props-match-prop-types": [
        0,
        { allowRequiredDefaults: true },
      ],
      "import/no-extraneous-dependencies": [
        "error",
        { devDependencies: true, peerDependencies: true, packageDir: "./" },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  }),
];
