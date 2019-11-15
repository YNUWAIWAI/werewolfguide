const fs = require('fs')
const path = require('path')

const srcFiles = [
  'privacy.md',
  'terms.md'
]
const srcDir = path.join(__dirname, '..', 'docs', 'ja')
const distDir = path.join(__dirname, '..', 'website', 'translated_docs', 'ja')

srcFiles.forEach(fileName => {
  const srcPath = path.join(srcDir, fileName)
  const distPath = path.join(distDir, fileName)

  fs.copyFile(srcPath, distPath, err => {
    if (err) {
      throw err
    }
    console.log('Copied:', srcPath, '=>', distPath)
  })
})