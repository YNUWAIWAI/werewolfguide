const API_VERSION = 'v1'

const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')
const {projectName} = require('../website/siteConfig')
const DEST_DIR = path.join(__dirname, '..', 'website', 'build', projectName, 'api', API_VERSION)
const SRC_DIR = path.join(__dirname, '..', 'website', 'api', API_VERSION)

fsPromises
  .mkdir(DEST_DIR, {recursive: true})
  .then(() => fsPromises.readdir(SRC_DIR))
  .then(srcFiles => Promise.all(
    srcFiles.map(async file => {
      const SRC_PATH = path.join(SRC_DIR, file)
      const generator = require(SRC_PATH)
      const response = await generator()
      const srcBasename = path.basename(SRC_PATH, '.js')
      const DIST_PATH = path.join(DEST_DIR, `${srcBasename}.json`)

      return fsPromises.writeFile(DIST_PATH, JSON.stringify(response, null, '  '))
    })
  ))
  .catch(reason => console.log(reason))