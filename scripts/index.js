const octokit = require('@octokit/rest')()
const fs = require('fs')
const simpleGit = require('simple-git/promise')
const path = require('path')

const commitData = require('./commit-data.json')

const repo = { owner: 'airbnb', repo: 'javascript' }

async function getLatestCommit() {
  const { data: [{ sha }] } = await octokit.repos.getCommits({ ...repo, per_page: 1 })
  const { data: { commit } } = await octokit.repos.getCommit({ ...repo, sha })

  const { date } = commit.committer

  return { sha, date }
}

async function isCommitDataChange(sha, date) {
  if (date < commitData.date) throw new Error('given commit is not the latest')

  return sha !== commitData.sha
}

async function saveCommitData(sha, date) {
  const data = { sha, date }
  fs.writeFileSync(path.resolve(__dirname, 'commit-data.json'), JSON.stringify(data, null, 2))
}

async function cloneRepo(sha) {
  if (!fs.existsSync(path.resolve(__dirname, 'airbnb-config'))) {
    await simpleGit(path.resolve(__dirname)).clone('https://github.com/airbnb/javascript.git', 'airbnb-config')
  }

  const git = simpleGit(path.resolve(__dirname, 'airbnb-config'))

  const getLatestHash = async () => {
    const log = await git.log({ 'max-count': 0 })
    return log.latest.hash
  }
  if (sha === await getLatestHash()) return

  await git.pull()

  if (sha !== await getLatestHash()) throw new Error('latest commit sha mismatch')
}

async function run() {
  const { sha, date } = await getLatestCommit()

  if (!await isCommitDataChange(sha, date)) return

  await saveCommitData(sha, date)
  await cloneRepo(sha)
}

run()
