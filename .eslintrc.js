module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: `./tsconfig.json`,
    createDefaultProgram: true,
  },
  plugins: ["promise"],
  extends: ["@react-native-community", "prettier"],
  rules: {
    "react/jsx-boolean-value": "off",
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "arrow-body-style": ["error", "always"],
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        semi: true,
      },
    ],
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "error",
    "promise/no-promise-in-callback": "error",
    "promise/no-callback-in-promise": "error",
    "promise/avoid-new": "error",
    "promise/no-new-statics": "error",
    "promise/no-return-in-finally": "error",
    "promise/valid-params": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-unused-styles": "error",
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};

