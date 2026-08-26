// import js from "@eslint/js";
// import tseslint from "typescript-eslint";

// export default tseslint.config(
//   { ignores: ["dist/", "node_modules/", "src/generated/"] },
//   js.configs.recommended,
//   ...tseslint.configs.recommended,
// );

import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: [
      "dist/",
      "node_modules/",
      "src/generated/",
    ],
  },

  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },
];