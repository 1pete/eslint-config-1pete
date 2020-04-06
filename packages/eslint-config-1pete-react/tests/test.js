const _ = require('lodash')
const { CLIEngine } = require('eslint')

const getAllReportedRules = (report) =>
  _.chain(report.results)
    .map('messages')
    .flatten()
    .map('ruleId')
    .uniq()
    .sort()
    .value()

describe('eslint config 1pete react', () => {
  it('test pass', () => {
    const report = new CLIEngine().executeOnFiles(['./tests/subjects/pass/*.js'])

    if (report.errorCount > 0) {
      const errors = getAllReportedRules(report)
      throw new Error(`get errors from:\n\t${errors.join('\n\t')}`)
    }
  })
})
