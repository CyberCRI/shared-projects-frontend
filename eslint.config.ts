import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig({
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe': 'off',
    '@typescript-eslint/require-await': 'off',
    'no-debugger': 'error',
    omitLastInOneLineBlock: 'off',
    'no-var': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
  },
  extends: [tseslint.configs.recommendedTypeChecked],
  ignores: [
    "./dist",
  ],
  languageOptions: {
    parserOptions: {
      projectService: true,
    },
  },
})
