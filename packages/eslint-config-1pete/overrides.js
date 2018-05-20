const OFF = 'off'
const ERROR = 'error'

module.exports = {
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    'implicit-arrow-linebreak': OFF,
    'no-await-in-loop': OFF,
    'prefer-const': OFF,
    semi: [ERROR, 'never'],

    'import/dynamic-import-chunkname': OFF,
  },
}
