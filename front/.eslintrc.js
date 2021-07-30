const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    JSX: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'prettier/prettier': RULES.ERROR,
    'import/extensions': RULES.OFF,
    'import/no-unresolved': RULES.OFF,
    'no-use-before-define': RULES.OFF,
    'react/jsx-props-no-spreading': RULES.OFF,
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
  },
}
