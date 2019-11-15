const fs = require('fs')
const path = require('path')
const srcFiles = require('./srcFiles')
const srcDir = path.join(__dirname, '..', 'docs', 'ja')

srcFiles.forEach(fileName => {
  const srcPath = path.join(srcDir, fileName)
  const distPath = path.join(srcDir, `${fileName}.exclude`)

  fs.rename(srcPath, distPath, err => {
    if (err) {
      throw err
    }
    console.log('Rename:', srcPath, '=>', distPath)
  })
})