const { resolve } = require('path');

module.exports = {
  settings: {
    'import/resolver': {
      node: {
        paths: [
          resolve(__dirname, 'node_modules'),
          resolve(__dirname, 'src'),
          resolve(__dirname),
        ],
      },
    },
  },
  extends: [
    'react-app',
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    'jsx-a11y',
  ],
  rules: {
    'import/extensions': 0,
    'react/jsx-one-expression-per-line': 0,
  },
};
