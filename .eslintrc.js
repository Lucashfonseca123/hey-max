module.exports = {
  root: false,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  "rules": {
    "prettier/prettier": ["error", {
      "endOfLine": "auto"
    }],
  },
};
