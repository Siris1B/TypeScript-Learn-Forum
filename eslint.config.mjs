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
import { fixupPluginRules } from '@eslint/compat';
import featureSlicedImportChecker from 'eslint-plugin-feature-sliced-import-checker';
import eslintUnusedImports from 'eslint-plugin-unused-imports';

/** @type {import('eslint'.Linter.FlatConfig[])} */
export default tsEslint.config(
  {
    plugins: {
      'react-hooks': fixupPluginRules(eslintReactHooks),
      react,
      'react-refresh': eslintReactRefresh, //
      prettier: prettierPlugin,
      import: importPlugin,
      '@typescript-eslint': tsEslint.plugin,
      jest,
      'eslint-plugin-jest': esJest,
      storybook,
      'feature-sliced-import-checker': featureSlicedImportChecker,
      'unused-imports': eslintUnusedImports,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2022,
        __IS_DEV__: true,
        __API__URL__: true,
        __PROJECT__: true,
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
      'no-undef': 'off',
      'no-console': 'warn',
      'no-mixed-spaces-and-tabs': 'warn',
      'space-before-blocks': 'error',
      'space-in-parens': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'prefer-const': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
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
      'feature-sliced-import-checker/path-checker': 'error',
      'feature-sliced-import-checker/public-api-imports': [
        'error',
        {
          alias: '@',
          testFilesPatterns: [
            '**/*.test.*',
            '**/*.story.*',
            '**/StoreDecorator.tsx',
          ],
        },
      ],
      'feature-sliced-import-checker/layer-imports-checker': [
        'error',
        {
          ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
        },
      ],
      'unused-imports/no-unused-imports': 'error',
    },
  },
  {
    ignores: ['./src/**/*.test.tsx'],
  },
);
