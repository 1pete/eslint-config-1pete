const base = require('./base')

const OFF = 'off'
const ERROR = 'error'

const [, ...noRestrictedSyntaxBase] = base.rules['no-restricted-syntax']

module.exports = {
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    'implicit-arrow-linebreak': OFF,
    'no-await-in-loop': OFF,
    'no-restricted-syntax': [
      ERROR,
      ...noRestrictedSyntaxBase.filter(syntax => syntax.selector !== 'ForOfStatement'),
    ],
    'prefer-const': OFF,
    semi: [ERROR, 'never'],

    'import/dynamic-import-chunkname': OFF,
  },
}
