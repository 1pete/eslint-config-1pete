const base = require('./base')

const OFF = 'off'
const ERROR = 'error'

const [, ...noRestrictedSyntaxBase] = base.rules['no-restricted-syntax']
const [, noUnusedVarsBase] = base.rules['no-unused-vars']

module.exports = {
  parserOptions: {
    ecmaVersion: 9,
  },
  rules: {
    // off
    'arrow-body-style': OFF,
    'class-methods-use-this': OFF,
    'implicit-arrow-linebreak': OFF,
    'no-await-in-loop': OFF,
    'prefer-const': OFF,
    'import/prefer-default-export': OFF,

    // error
    'default-param-last': ERROR,
    'grouped-accessor-pairs': ERROR,
    'no-async-promise-executor': ERROR,
    'no-constructor-return': ERROR,
    'no-dupe-else-if': ERROR,
    'no-import-assign': ERROR,
    'no-misleading-character-class': ERROR,
    'no-setter-return': ERROR,
    'prefer-exponentiation-operator': ERROR,
    'prefer-regex-literals': ERROR,
    'require-atomic-updates': ERROR,
    semi: [ERROR, 'never'],

    // error with config
    'array-bracket-newline': [ERROR, 'consistent'],
    'array-element-newline': [ERROR, 'consistent'],
    'function-call-argument-newline': [ERROR, 'consistent'],
    'no-restricted-syntax': [
      ERROR,
      ...noRestrictedSyntaxBase.filter((syntax) => syntax.selector !== 'ForOfStatement'),
    ],
    'no-unused-vars': [
      ERROR,
      {
        ...noUnusedVarsBase,
        argsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
  },
}
