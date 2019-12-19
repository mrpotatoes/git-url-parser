console.clear()
console.log(Math.random(1, 100))
console.log('')

const url = require('url')

const testUrls = [
  // Github
  'http://github.com',
  'http://www.github.com',
  'https://github.com',
  'https://www.github.com',

  // Bitbucket
  'http://bitbucket.com',
  'http://www.bitbucket.com',
  'https://bitbucket.com',
  'https://www.bitbucket.com',

  // Gitlab
  'http://gitlab.com',
  'http://www.gitlab.com',
  'https://gitlab.com',
  'https://www.gitlab.com',
]

// providerHost :: -> String -> String
const providerHost = gitUrl => (url.parse(gitUrl).host.replace('www.', ''))
const repoUrl = gitUrl => path => `${baseUrl(gitUrl)}/${path}`

const segments = gitUrl => (
  url
    .parse(gitUrl.replace('.git', '')) // Build a parsed url object.
    .path // Get the path property.
    .substring(1) // Remove the first character ('/').
    .split('/') // Turn into array.
)

const baseUrl = gitUrl => {
  const pathParts = segments(gitUrl)
  const base = `${url.parse(gitUrl).host}/${pathParts.join('/')}`
  const repoUrl = `https://${base}`

  return repoUrl
}

for (let i = 0; i < testUrls.length; i++) {
  // console.log(providerHost(testUrls[i]))
  console.log(baseUrl(testUrls[i]))
}

module.exports = {
  providerHost,
  rawFileUrl: () => {},
  fileUrl: () => {},

  // These two are interchangeable but to have a more fluent API I have both (they are aliases).
  urlAtCommit: () => {},

  // I'll clean this up later.
  urlAtBranch: module.exports.urlAtCommit,

  rawUrl: () => {},
}