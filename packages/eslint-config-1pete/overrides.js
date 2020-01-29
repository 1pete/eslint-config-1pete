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
    'no-async-promise-executor': ERROR,
    'no-misleading-character-class': ERROR,
    'require-atomic-updates': ERROR,
    semi: [ERROR, 'never'],

    // error with config
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
