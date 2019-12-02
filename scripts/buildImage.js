const fs = require('fs')
const fsPromises = fs.promises
const {COPYFILE_EXCL} = fs.constants
const path = require('path')
const languages = require('../website/languages').filter(locale => locale.enabled && locale.tag !== 'en')
const {projectName} = require('../website/siteConfig')
const distDir = path.join(__dirname, '..', 'website', 'build', projectName, 'img')
const srcDir = path.join(distDir, 'en')

fs.readdir(srcDir, (err, srcFiles) => {
  if (err) {
    throw err
  }

  languages.forEach(async language => {
    const localeDir = path.join(distDir, language.tag)
    
    await fsPromises.mkdir(localeDir)
      .catch(reason => console.log(reason.message))
    await fsPromises.access(localeDir) 
      .catch(reason => console.log(reason.message))
    srcFiles.forEach(file => {
      fsPromises.copyFile(
        path.join(srcDir, file),
        path.join(localeDir, file),
        COPYFILE_EXCL
      ).catch(reason => console.log(reason.message))
    })
  })
})
