module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // "eslint:recommended",
    // "plugin:react/recommended"
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'no-param-reassign': 0,
    'react/jsx-filename-extension': 0,
    'react/static-property-placemen': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'jsx-ally/anchor-is-valid': 0,
    'no-shadow': 0,
  },
}
