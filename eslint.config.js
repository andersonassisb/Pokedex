// @ts-check

import eslint from "@eslint/js";
import jest from "eslint-plugin-jest";
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
  },
  prettierConfig,
);
