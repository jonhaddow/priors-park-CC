import { base } from "eslint-config-jonhaddow";

export default [
  ...base,

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
