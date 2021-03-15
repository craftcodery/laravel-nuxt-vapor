module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    // 'plugin:vue/vue3-recommended', Use instead of plugin:vue/base when updated to Vue 3
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  // required to lint *.vue files
  globals: {
    $nuxt: true,
  },
  // add your custom rules here
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'prettier/prettier': ['error', { printWidth: 120, semi: true, singleQuote: true }],
  },
};
