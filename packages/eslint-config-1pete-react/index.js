module.exports = {
  extends: ['./base', './overrides'].map(require.resolve),
}
