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
    semi: 0,
    'import/no-extraneous-dependencies': 0,
    'comma-dangle': 0,
    'operator-linebreak': [2, 'after'],
    'prefer-template': 0
  },
};
