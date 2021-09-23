module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    /// ENFORCED RULES

    // force semicolons
    "semi": ["error", "always"],
    // force 2 spaces
    "indent": ["error", 2],
    // force single quotes
    "quotes": ["error", "single"],
    // trailing spaces not allowed
    "no-trailing-spaces": "error",
    // space after keywords
    "keyword-spacing": "error",
    // space before function brackets
    "space-before-function-paren": ["error", "always"],
    // space after function brackets
    "space-before-blocks": ["error", "always"],
    // no multiple empty lines
    "no-multiple-empty-lines": ["error", {"max": 2, "maxEOF": 0, "maxBOF": 0}],
    // force use of brackets
    "curly": "error",

    /// DISABLED RULES

    // no spaces in brackets
    "space-in-parens": ["error", "never"],

    /// WARN RULES

    // warn space between assignment
    "space-infix-ops": "warn",
    // warn about console logs
    "no-console": "warn",
    // warn stroustrup brace style
    "brace-style": ["warn", "stroustrup"],
    // warn about training commas
    "comma-dangle": ["warn", "never"]
  },
  plugins: [
    "react"
  ]
};