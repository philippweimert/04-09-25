// eslint.config.js
import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    plugins: {
      react,
      'jsx-a11y': jsxA11y,
      import: importPlugin
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Not needed with modern React
      'react/prop-types': 'off' // This project does not use prop-types
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect the React version
      }
    }
  },
];
