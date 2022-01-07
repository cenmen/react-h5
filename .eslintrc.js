module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  settings: {
    react: { version: 'detect' },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  globals: {},
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'react/display-name': 0
  },
}
