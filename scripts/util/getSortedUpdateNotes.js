const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')
const SRC_DIR = path.join(__dirname, '..', '..', 'docs', 'updateNotes')
const regex = /^v(?<major>\d+)-(?<minor>\d+)-(?<patch>\d+)/
const compare = (a, b) => {
  const resultA = a.match(regex).groups
  const resultB = b.match(regex).groups
  const major = Number(resultB.major) - Number(resultA.major)
  const minor = Number(resultB.minor) - Number(resultA.minor)
  const patch = Number(resultB.patch) - Number(resultA.patch)

  if (major !== 0) {
    return major
  } 
  if (minor !== 0) {
    return minor
  }

  return patch 
}

const getSortedUpdateNotes = fsPromises.readdir(SRC_DIR)
  .then(srcFiles => {
    const files = srcFiles
      .sort(compare)

    return files
  })
  .catch(reason => console.log(reason))

module.exports = getSortedUpdateNotes