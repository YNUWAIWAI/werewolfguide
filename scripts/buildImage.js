const fs = require('fs')
const fsPromises = fs.promises
const {COPYFILE_EXCL} = fs.constants
const path = require('path')
const languages = require('../website/languages').filter(locale => locale.enabled && locale.tag !== 'en')
const {projectName} = require('../website/siteConfig')
const DEST_DIR = path.join(__dirname, '..', 'website', 'build', projectName, 'img')
const SRC_DIR = path.join(DEST_DIR, 'en')

fs.readdir(SRC_DIR, (err, srcFiles) => {
  if (err) {
    throw err
  }

  languages.forEach(async language => {
    const LOCALE_DIR = path.join(DEST_DIR, language.tag)
    
    await fsPromises.mkdir(LOCALE_DIR)
      .catch(reason => console.log(reason.message))
    await fsPromises.access(LOCALE_DIR) 
      .catch(reason => console.log(reason.message))
    srcFiles.forEach(file => {
      fsPromises.copyFile(
        path.join(SRC_DIR, file),
        path.join(LOCALE_DIR, file),
        COPYFILE_EXCL
      ).catch(reason => console.log(reason.message))
    })
  })
})
