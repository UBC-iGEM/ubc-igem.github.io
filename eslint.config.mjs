import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import { defineConfig } from "eslint/config"
import eslintPluginAstro from "eslint-plugin-astro"

// can't use @eslint/css with the astro eslint plugin - see this gh issue for
// details: https://github.com/ota-meshi/eslint-plugin-astro/issues/485
export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-strict"],
  {
    rules: {
      "@typescript-eslint/explicit-function-return-type": "warn",
      "consistent-return": "error",
      "default-case-last": "error",
      eqeqeq: "error",
      "no-await-in-loop": "warn",
      "no-console": "error",
      "no-duplicate-imports": "error",
      "no-empty-function": "error",
      "no-implicit-coercion": "error",
      "no-label-var": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "no-useless-assignment": "error",
      "prefer-arrow-callback": "warn",
      "prefer-const": "warn",
      "prefer-promise-reject-errors": "error",
      yoda: "warn",
    },
  },
])
