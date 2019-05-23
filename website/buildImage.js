const fs = require('fs')
const fsPromises = fs.promises
const {COPYFILE_EXCL} = fs.constants
const path = require('path')
const languages = require('./languages').filter(locale => locale.enabled && locale.tag !== 'en')
const {projectName} = require('./siteConfig')
const imagePath = path.join('./build', projectName, 'img')
const enImagePath = path.join(imagePath, 'en')

;(async () => {
  const enFiles = await fsPromises.readdir(enImagePath)

  languages.forEach(async language => {
    const localePath = path.join(imagePath, language.tag)
    
    await fsPromises.mkdir(localePath)
      .catch(reason => console.log(reason.message))
    await fsPromises.access(localePath) 
      .catch(reason => console.log(reason.message))
    enFiles.forEach(file => {
      fsPromises.copyFile(
        path.join(enImagePath, file),
        path.join(localePath, file),
        COPYFILE_EXCL
      ).catch(reason => console.log(reason.message))
    })
  })
})()
