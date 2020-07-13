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
    srcFiles.map(async file => {
      const srcPath = path.join(srcDir, file)
      const generator = require(srcPath)
      const response = await generator()
      const srcBasename = path.basename(srcPath, '.js')
      const distPath = path.join(distDir, `${srcBasename}.json`)

      return fsPromises.writeFile(distPath, JSON.stringify(response))
    })
  ))
  .catch(reason => console.log(reason))