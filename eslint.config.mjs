import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react/configs/recommended.js';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import tsEslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import jest from 'jest';
import esJest from 'eslint-plugin-jest';
import storybook from 'storybook';

/** @type {import('eslint'.Linter.FlatConfig[])} */
export default tsEslint.config(
  {
    plugins: {
      'react-hooks': eslintReactHooks,
      react,
      'react-refresh': eslintReactRefresh, //
      prettier: prettierPlugin,
      import: importPlugin,
      '@typescript-eslint': tsEslint.plugin,
      jest,
      'eslint-plugin-jest': esJest,
      storybook,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2022,
        __IS_DEV__: true,
        ...globals.jest,
      },
      parser: tsEslint.parser,
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
  },
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    files: ['**/*.{,ts,tsx}'],
    ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.js'],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'no-var': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'no-undef': 'error',
      'no-console': 'warn',
      'no-mixed-spaces-and-tabs': 'warn',
      'space-before-blocks': 'error',
      'space-in-parens': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'prefer-const': 'warn',
      'import/order': [
        'error',
        {
          groups: [
            'internal',
            'external',
            'builtin',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
        },
      ],
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
    },
  },
  {
    ignores: ['./src/**/*.test.tsx'],
  },
);