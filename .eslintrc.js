module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  ignorePatterns: ['dist/**', '.eslintrc.js', 'babel.config.js'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: ["error"],
    indent: ["error", 2]
  }
};
