const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')
const languages = require('../../languages').filter(locale => locale.enabled && locale.tag !== 'en')
const srcDir = path.join(__dirname, '..', '..', 'translated_docs')
const {Remarkable} = require('remarkable')
const {linkify} = require('remarkable/linkify')
const fm = require('front-matter')
const getSortedUpdateNotes = require('../../../scripts/util/getSortedUpdateNotes')
const TRUNCATE_MARKER = /<!--\s*truncate\s*-->/

const md = new Remarkable()
md.use(linkify)

const generateUpdateNotes = async () => {
  const fileNames = await getSortedUpdateNotes
    .catch(reason => console.log(reason))
  const result = {}

  languages.forEach(language => {
    result[language.tag] = []
    fileNames.forEach(fileName => {
      const filePath = path.join(srcDir, language.tag, 'updateNotes', fileName)
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