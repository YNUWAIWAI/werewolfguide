const API_VERSION = 'v1'

const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')
const {projectName} = require('../website/siteConfig')
const distDir = path.join(__dirname, '..', 'website', 'build', projectName, 'api', API_VERSION)
const srcDir = path.join(__dirname, '..', 'website', 'api', API_VERSION)

fsPromises
  .mkdir(distDir, {recursive: true})
  .then(() => fsPromises.readdir(srcDir))
  .then(srcFiles => Promise.all(
    srcFiles.map(file => {
      const srcPath = path.join(srcDir, file)
      const response = require(srcPath)
      const srcBasename = path.basename(srcPath, '.js')
      const distPath = path.join(distDir, `${srcBasename}.json`)

      return fsPromises.writeFile(distPath, response)
    })
  ))
  .catch(reason => console.log(reason))