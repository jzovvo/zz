module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': 0,
    camelcase: 0,
    'comma-dangle': 0,
    'consistent-return': 0,
    'guard-for-in': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-cycle': 0,
    'no-unused-expressions': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-else-return': 0,
    'no-param-reassign': 0,
    'no-self-compare': 0,
    'no-nested-ternary': 0,
    'no-cond-assign': 0,
    'operator-linebreak': [2, 'after'],
    'object-curly-newline': 0,
    'object-property-newline': 0,
    'prefer-template': 0,
    'prefer-const': 0,
    semi: 0,
  }
};
