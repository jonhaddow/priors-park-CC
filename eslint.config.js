import { base, react } from "eslint-config-jonhaddow";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...base,
  ...react,
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
]);
