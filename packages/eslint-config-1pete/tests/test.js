const _ = require('lodash')
const { ESLint } = require('eslint')
const fs = require('fs')
const path = require('path')

const getAllReportedRules = (report) =>
  _.chain(report.results)
    .map('messages')
    .flatten()
    .map('ruleId')
    .uniq()
    .sort()
    .value()

describe('eslint config 1pete', () => {
  it('test pass', () => {
    const report = new ESLint().lintFiles([
      './tests/subjects/pass/*.js',
    ])

    if (report.errorCount > 0) {
      const errors = getAllReportedRules(report)
      throw new Error(`get errors from:\n\t${errors.join('\n\t')}`)
    }
  })

  describe('test fail', () => {
    const subjectPath = path.resolve(__dirname, 'subjects', 'fail')
    const ruleNames = fs.readdirSync(subjectPath).sort((a, b) => {
      const pluginA = a.includes('_')
      const pluginB = b.includes('_')

      if (pluginA && !pluginB) return 1
      if (!pluginA && pluginB) return -1
      return a < b ? -1 : 1
    })

    ruleNames.forEach((folderName) => {
      const ruleName = folderName.includes('_')
        ? folderName.split('_').join('/')
        : folderName
      it(`rule: ${ruleName}`, async () => {
        const fileNames = fs.readdirSync(path.resolve(subjectPath, folderName))
        for (let fileName of fileNames) {
          const report = await new ESLint().lintFiles([
            path.resolve(path.resolve(subjectPath, folderName, fileName)),
          ])
          if (
            report.length === 0 ||
            !getAllReportedRules(report[0].messages.some(message => message.ruleId === ruleName))
          ) {
            throw new Error(
              `expect error "${ruleName}" from file "${fileName}" but not found`,
            )
          }
        }
      })
    })
  })
})
