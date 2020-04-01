module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'standard',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-console": "off",
    "dot-notation": "off",
    "comma-dangle": "off",
    "quote-props": ["error", "consistent"],
    "no-async-promise-executor": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": 0
  }
}
