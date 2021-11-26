const _ = require('lodash')
const { ESLint } = require('eslint')

const getAllReportedRules = (report) =>
  _.chain(report).map('messages').flatten().map('ruleId').uniq().sort().value()

describe('eslint config 1pete react', () => {
  it('test pass', async () => {
    const report = await new ESLint().lintFiles(['./tests/subjects/pass/*.js'])

    const error = report.filter((item) => item.messages.length > 0)
    if (error.length > 0) {
      const errors = getAllReportedRules(report)
      throw new Error(`get errors from:\n\t${errors.join('\n\t')}`)
    }
  })
})
