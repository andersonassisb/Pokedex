// @ts-check

import eslint from "@eslint/js";
import jest from "eslint-plugin-jest";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigDirName: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ...tseslint.configs.disableTypeChecked,
    ...jest.configs["flat/recommended"],
    ...jest.configs["flat/style"],
    ...jest.configs["flat/all"],
    plugins: {
      react,
      jest,
    },
    rules: {
      // Config lint
      "no-console": 2,

      // Config react
      "react/prop-types": 0,
      "react/self-closing-comp": "error",

      // Config typescript
      "@typescript-eslint/explicit-function-return-type": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-use-before-define": 0,
      "@typescript-eslint/no-unused-vars": 0,
      "@typescript-eslint/camelcase": 0,
      "@typescript-eslint/no-empty-function": 0,
      "@typescript-eslint/no-non-null-assertion": 0,
      "@typescript-eslint/interface-name-prefix": 0,
      "react/no-unescaped-entities": 0,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/ban-ts-ignore": 0,
      "@typescript-eslint/no-this-alias": 0,
      "@typescript-eslint/ban-types": 0,
      "@typescript-eslint/ban-ts-comment": 0,
      "@typescript-eslint/no-unsafe-return": 0,
      "@typescript-eslint/no-floating-promises": 0,
      "@typescript-eslint/no-unsafe-assignment": 0,
      "prefer-const": 0,
      "react/display-name": 0,
      "react/no-deprecated": 0,
      "no-var": 0,
    },
  },
  prettierConfig,
);
