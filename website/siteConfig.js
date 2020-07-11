const organizationName = 'YNUWAIWAI'
const latest = require('../config/latestUpdateNotesVersion.json')

module.exports = {
  baseUrl: '/',
  cleanUrl: true,
  colors: {
    primaryColor: '#836d2d',
    secondaryColor: '#5b4c1f'
  },
  copyright: `Copyright © ${new Date().getFullYear()} ${organizationName}`,
  favicon: 'img/favicon.ico',
  headerIcon: 'img/favicon.ico',
  headerLinks: [
    {
      languages: true
    },
    {
      doc: 'introduction',
      label: 'How to play'
    },
    {
      doc: 'privacy',
      label: 'Privacy and Terms'
    },
    {
      doc: 'organization',
      label: 'Organization'
    },
    {
      doc: 'credits',
      label: 'Credits'
    },
    {
      doc: `updateNotes/${latest}`,
      label: 'Update notes'
    }
  ],
  highlight: {
    theme: 'default'
  },
  onPageNav: 'separate',
  organizationName,
  projectName: 'LiCOS',
  scripts: ['https://buttons.github.io/buttons.js'],
  scrollToTop: true,
  tagline: 'The document for LiCOS',
  title: 'LiCOS',
  url: 'https://werewolfguide.netlify.app'
}
