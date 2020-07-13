const fs = require('fs')
const path = require('path')
const languages = require('../../languages').filter(locale => locale.enabled)
const {Remarkable} = require('remarkable')
const {linkify} = require('remarkable/linkify')
const fm = require('front-matter')
const getSortedUpdateNotes = require('../../../scripts/util/getSortedUpdateNotes')
const SRC_DIR = path.join(__dirname, '..', '..', 'translated_docs')
const SRC_DIR_EN = path.join(__dirname, '..', '..', '..', 'docs')
const TRUNCATE_MARKER = /<!--\s*truncate\s*-->/
const UPDATE_NOTES_DIRNAME = 'updateNotes'

const md = new Remarkable()
md.use(linkify)

const generateUpdateNotes = async () => {
  const fileNames = await getSortedUpdateNotes
    .catch(reason => console.log(reason))
  const result = {}

  languages.forEach(language => {
    result[language.tag] = []
    fileNames.forEach(fileName => {
      const filePath =
        language.tag !== 'en' ?
          path.join(SRC_DIR, language.tag, UPDATE_NOTES_DIRNAME, fileName) :
          path.join(SRC_DIR_EN, UPDATE_NOTES_DIRNAME, fileName)
      const value = fs.readFileSync(filePath)
      const content = fm(value.toString())
      const body = content.body.split(TRUNCATE_MARKER)[0]
      const renderedBody = md.render(body)
      
      result[language.tag] = [
        {
          body: renderedBody,
          title: content.attributes.title
        },
        ... result[language.tag]
      ]
    })
  })

  return result
}

module.exports = generateUpdateNotes