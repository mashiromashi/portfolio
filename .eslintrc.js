module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/camelcase': 'off',
    'react/display-name': 'off',
  },
  extends: [
    'airbnb-typescript/base',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ["*.config.js"]
};
