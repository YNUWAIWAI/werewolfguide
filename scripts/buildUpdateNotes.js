const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')
const getSortedUpdateNotes = require('./util/getSortedUpdateNotes')

getSortedUpdateNotes
  .then(srcFiles => {
    const latest = path.basename(srcFiles[0], '.md')

    return latest
  })
  .then(latest => {
    distPath = path.join(__dirname, '..', 'config', 'latestUpdateNotesVersion.json')
    fsPromises.writeFile(distPath, JSON.stringify(latest))
  })
  .catch(reason => console.log(reason))
