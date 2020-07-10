const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')
const srcDir = path.join(__dirname, '..', 'docs', 'updateNotes')
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

fsPromises.readdir(srcDir)
  .then(srcFiles => {
    const files = srcFiles
      .filter(file => file !== 'latest.md')
      .sort(compare)
    const latest = files[0]
    const srcPath = path.join(srcDir, latest)
    const dirPath = path.join(srcDir, 'latest.md')

    return fsPromises.copyFile(srcPath, dirPath)
  })
  .catch(reason => console.log(reason))