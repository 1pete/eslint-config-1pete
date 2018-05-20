/* eslint-env mocha */

const _ = require('lodash')
const { CLIEngine } = require('eslint')
const fs = require('fs')
const path = require('path')

const getAllReportedRules = report =>
  _.chain(report.results)
    .map('messages')
    .flatten()
    .map('ruleId')
    .uniq()
    .sort()
    .value()

describe('eslint config 1pete', () => {
  it('test pass', () => {
    const report = new CLIEngine().executeOnFiles(['./tests/subjects/pass/*.js'])

    if (report.errorCount > 0) {
      const errors = getAllReportedRules(report)
      throw new Error(`get errors from:\n\t${errors.join('\n\t')}`)
    }
  })

  describe('test fail', () => {
    const subjectPath = path.resolve(__dirname, 'subjects', 'fail')
    const ruleNames = fs.readdirSync(subjectPath)

    ruleNames.forEach((ruleName) => {
      it(`rule: ${ruleName}`, () => {
        const fileNames = fs.readdirSync(path.resolve(subjectPath, ruleName))
        fileNames.forEach((fileName) => {
          const report = new CLIEngine()
            .executeOnFiles([path.resolve(path.resolve(subjectPath, ruleName, fileName))])
          if (report.errorCount === 0 || !getAllReportedRules(report).includes(ruleName)) {
            throw new Error(`expect error "${ruleName}" from file "${fileName}" but not found`)
          }
        })
      })
    })
  })
})
