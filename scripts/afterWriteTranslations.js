const fs = require('fs')
const path = require('path')
const srcFiles = require('./srcFiles')
const srcDir = path.join(__dirname, '..', 'docs', 'ja')

srcFiles.forEach(fileName => {
  const srcPath = path.join(srcDir, `${fileName}.exclude`)
  const distPath = path.join(srcDir, fileName)

  fs.rename(srcPath, distPath, err => {
    if (err) {
      throw err
    }
    console.log('Rename:', srcPath, '=>', distPath)
  })
})