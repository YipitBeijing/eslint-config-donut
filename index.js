module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    './rules/spell-check',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    ErrorUtils: true,
    __DEV__: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['spellcheck', 'sonarjs', 'jest'],
  rules: {
    'no-console': 0,
    'react/jsx-uses-vars': 2,
    'no-unused-vars': ['warn', { args: 'none' }],
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/no-string-refs': 0,
    'react/no-deprecated': 0,
    semi: ['warn', 'always'],
    'no-extra-boolean-cast': 0,
    'no-prototype-builtins': 0,
    'require-await': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'object-curly-newline': 0,
    'max-len': [
      'error',
      {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'no-use-before-define': 0,
    'no-shadow': 0,
    'react/state-in-constructor': 0,
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'comma-dangle': [0, { functions: 'never' }],
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'react/jsx-props-no-spreading': 0,
    'operator-linebreak': 0,
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'import/no-cycle': 0,
    'no-bitwise': 0,
    // 'sonarjs/cognitive-complexity': 0,
    // 'sonarjs/no-duplicate-string': 0,
    // 'sonarjs/no-identical-functions': 0,
    // 'sonarjs/no-collapsible-if': 'warn',
    'no-alert': 0,
    'no-iterator': 0,
    'no-restricted-syntax': ['error', 'WithStatement', "BinaryExpression[operator='in']"],
    'no-underscore-dangle': 0,
    'no-nested-ternary': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/static-property-placement': 0,
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
    'no-return-await': 0,
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            group: 'external',
            pattern: '~/**',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'max-classes-per-file': 0,
    'import/prefer-default-export': 0,
    camelcase: 0,
    'react/sort-comp': 1,
    'react/prefer-stateless-function': 1,
    'import/no-named-as-default': 1,
    'react/destructuring-assignment': 0,
    'react/no-unused-prop-types': 1,
    'react/no-unused-state': 'warn',
    'no-param-reassign': ['error', { props: false }],
    'class-methods-use-this': 0,
  },
};
