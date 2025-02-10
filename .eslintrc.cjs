module.exports = {
  root: true, // Indicates this is the root configuration
  env: {
    browser: true, // Includes browser global variables
    node: true, // Includes Node.js global variables
    es2021: true, // Supports ES2021 syntax
  },
  extends: [
    "eslint:recommended", // Base recommended rules by ESLint
    "plugin:react/recommended", // React-specific linting rules
    "plugin:react-hooks/recommended", // Rules for React hooks
    "plugin:jsx-a11y/recommended", // Accessibility rules for JSX
  ],
  parserOptions: {
    ecmaVersion: 2021, // Supports ES2021 features
    sourceType: "module", // Allows using ECMAScript modules
    ecmaFeatures: {
      jsx: true, // Enables linting for JSX syntax
    },
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
  plugins: ["react", "react-hooks", "jsx-a11y"],
  rules: {
    // Customize rules here
    "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: true }], // Warn for unused variables
    "react/prop-types": "off", // Disable prop-types rule if using TypeScript
    "react/react-in-jsx-scope": "off", // Not needed in React 17+
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["invalidHref"],
      },
    ], // Accessibility: Ensure valid anchors
  },
  ignorePatterns: [
    "node_modules/", // Ignore node_modules folder
    "dist/", // Ignore build output
    ".eslintrc.cjs", // Ignore itself
  ],
};
