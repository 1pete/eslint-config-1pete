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
    'implicit-arrow-linebreak': OFF,
    'no-await-in-loop': OFF,
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
    'prefer-const': OFF,
    semi: [ERROR, 'never'],

    'import/dynamic-import-chunkname': OFF,
  },
}
