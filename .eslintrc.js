module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
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
    'react-hooks/exhaustive-deps': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'no-restricted-exports': 0,
    'react/jsx-filename-extension': 0,
    'default-param-last': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'react/jsx-props-no-spreading': 0,
    'max-len': 0,
    'no-console': 0,
    'no-empty': 0,
  },
};
