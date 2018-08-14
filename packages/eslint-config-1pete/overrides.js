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
    'class-methods-use-this': OFF,
    'implicit-arrow-linebreak': OFF,
    'no-await-in-loop': OFF,
    'no-async-promise-executor': ERROR,
    'no-misleading-character-class': ERROR,
    'no-restricted-syntax': [
      ERROR,
      ...noRestrictedSyntaxBase.filter(syntax => syntax.selector !== 'ForOfStatement'),
    ],
    'no-unused-vars': [
      ERROR,
      Object.assign({}, noUnusedVarsBase, {
        argsIgnorePattern: '^_',
      }),
    ],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'prefer-const': OFF,
    'prefer-object-spread': ERROR,
    'require-atomic-updates': ERROR,
    semi: [ERROR, 'never'],

    'import/no-useless-path-segments': [ERROR, { commonjs: true }],
    'import/prefer-default-export': OFF,
  },
}
