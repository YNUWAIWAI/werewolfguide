const fs = require('fs')
const path = require('path')
const srcFiles = require('../config/srcFiles')
const SRC_DIR = path.join(__dirname, '..', 'docs', 'ja')
const DEST_DIR = path.join(__dirname, '..', 'website', 'translated_docs', 'ja')

srcFiles.forEach(fileName => {
  const SRC_PATH = path.join(SRC_DIR, fileName)
  const DEST_PATH = path.join(DEST_DIR, fileName)

  fs.copyFile(SRC_PATH, DEST_PATH, err => {
    if (err) {
      throw err
    }
    console.log('Copied:', SRC_PATH, '=>', DEST_PATH)
  })
})