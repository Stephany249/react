import { dirname } from "path"
import { fileURLToPath } from "url"
import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import importPlugin from "eslint-plugin-import"
import prettier from "eslint-plugin-prettier"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const eslintConfig = [
  {
    ignores: ["dist"],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "import": importPlugin,
      "prettier": prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "quotes": ["error", "single"],
      "semi": ["error", "never"],
      "sort-imports": ["error", {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: true,
      }],
      "import/order": ["error", {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        pathGroups: [{
          pattern: "{react,react-dom/**,react-hooks/**,globals/**,@eslint/**,@typescript-eslint/**}",
          group: "external",
          position: "before",
        }],
        "newlines-between": "always",
      }],
      "max-len": ["error", { code: 80 }],
      "prettier/prettier": ["error", { singleQuote: true, semi: false, printWidth: 80 }],
    },
  },
]

export default eslintConfig