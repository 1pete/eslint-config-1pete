const _ = require('lodash')
const fs = require('fs')
const path = require('path')

const baseConfig = require('./airbnb-config/packages/eslint-config-airbnb-base/index.js')

const reactConfig = {
  extends: [
    './airbnb-config/packages/eslint-config-airbnb-base/rules/strict',
    './airbnb-config/packages/eslint-config-airbnb/rules/react',
    './airbnb-config/packages/eslint-config-airbnb/rules/react-a11y',
  ].map(require.resolve),
  rules: {},
}

const packages = [
  [baseConfig, 'eslint-config-1pete'],
  [reactConfig, 'eslint-config-1pete-react'],
]

packages.forEach(([targetConfig, packageName]) => {
  const { extends: extensions, ...config } = targetConfig

  extensions.forEach((extension) => {
    _.merge(config, require(extension))
  })

  const {
    plugins,
    env,
    parserOptions,
    settings,
    rules,
  } = config

  const ruleNames = Object.keys(rules).sort((a, b) => {
    const aFromPlugin = a.includes('/')
    const bFromPlugin = b.includes('/')

    if (aFromPlugin && !bFromPlugin) return 1
    if (!aFromPlugin && bFromPlugin) return -1
    return a < b ? -1 : 1
  })

  const content = `module.exports = ${JSON.stringify({
    plugins,
    parserOptions,
    settings,
    env,
    rules: ruleNames.reduce((acc, ruleName) => ({ ...acc, [ruleName]: rules[ruleName] }), {}),
  }, (key, value) => (value === Infinity ? 1000 : value), 2)}\n`

  fs.writeFileSync(path.resolve(__dirname, '..', 'packages', packageName, 'base.js'), content)
})
