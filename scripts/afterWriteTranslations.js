const fs = require('fs')
const path = require('path')
const SRC_FILES = require('../config/srcFiles')
const SRC_DIR = path.join(__dirname, '..', 'docs', 'ja')

SRC_FILES.forEach(fileName => {
  const SRC_PATH = path.join(SRC_DIR, `${fileName}.exclude`)
  const DEST_PATH = path.join(SRC_DIR, fileName)

  fs.rename(SRC_PATH, DEST_PATH, err => {
    if (err) {
      throw err
    }
    console.log('Rename:', SRC_PATH, '=>', DEST_PATH)
  })
})