module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "@typescript-eslint/type-annotation-spacing": ["off", {
      before: false,
      after: false
    }],
    "no-var": 0,
    "no-empty": 0,
    "no-irregular-whitespace": 0,
    "prefer-const": 0,
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-irregular-whitespace": 0,
    "@typescript-eslint/no-empty-function": ["off"],
    "@typescript-eslint/no-unused-vars": ["off"],
    "@typescript-eslint/member-delimiter-style": ["off"],
    'no-empty-function': "warn",
    'no-useless-escape': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
