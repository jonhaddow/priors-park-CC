import { base } from "eslint-config-jonhaddow";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
  ...base,

  ...compat.extends("plugin:tailwindcss/recommended"),

  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];
