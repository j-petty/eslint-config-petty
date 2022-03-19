module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsdoc/recommended"
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
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2, { "SwitchCase": 1 }],
    "@typescript-eslint/no-extra-semi": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-delimiter-style": ["error", {multiline: { delimiter: 'semi', requireLast: true }, singleline: { delimiter: 'semi', requireLast: true }}],
    // force single quotes
    "quotes": ["error", "single"],
    "jsx-quotes": ["error", "prefer-single"],
    // trailing spaces not allowed
    "no-trailing-spaces": "error",
    // space after keywords
    "keyword-spacing": "error",
    // space before function brackets
    "space-before-function-paren": ["error", "always"],
    // space after function brackets
    "space-before-blocks": ["error", "always"],
    // no multiple empty lines
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 0, "maxBOF": 0 }],
    // force use of brackets
    "curly": "error",
    // force no extra spaces
    "no-multi-spaces": "error",
    // force consistent JSX tag spacing
    "react/jsx-tag-spacing": "error",
    // force consistent JSX new lines
    "react/jsx-wrap-multilines": "error",

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
    "comma-dangle": ["warn", "never"],
    // warn about unused vars
    "no-unused-vars": "off",
    '@typescript-eslint/no-unused-vars': ["warn", { "argsIgnorePattern": "^_" }],
    // warn about redundant JSX booleans
    "react/jsx-boolean-value": "warn",
    // warn when a JSX element should be self closing
    "react/self-closing-comp": "warn",
    // warn when importing the same module twice
    "no-duplicate-imports": "warn",
    // warn about TODO comments so they aren't missed
    "no-warning-comments": ["warn", { "terms": ["todo"], "location": "start" }],
    "capitalized-comments": ["warn", "always"],
    // warn about missing jsdoc
    "jsdoc/require-jsdoc": ["warn", {contexts: ["TSInterfaceDeclaration", "TSTypeAliasDeclaration", "TSEnumDeclaration"]}],
    "jsdoc/require-param": "off",
    "jsdoc/require-returns": "off",
    // warn about JSX closing bracket styling
    "react/jsx-closing-bracket-location": ["warn", "line-aligned"]
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "jsdoc"
  ]
};