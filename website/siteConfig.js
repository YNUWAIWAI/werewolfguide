module.exports = {
  baseUrl: '/',
  cleanUrl: true,
  colors: {
    primaryColor: '#836d2d',
    secondaryColor: '#5b4c1f'
  },
  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,
  favicon: 'img/favicon.ico',
  headerIcon: 'img/favicon.ico',
  headerLinks: [
    {
      languages: true
    },
    {
      doc: 'how-to-play',
      label: 'How to play'
    },
    {
      doc: 'terms',
      label: 'Terms and Conditions'
    },
    {
      doc: 'organization',
      label: 'Organization'
    },
    {
      doc: 'credits',
      label: 'Credits'
    }
  ],
  highlight: {
    theme: 'default'
  },
  onPageNav: 'separate',
  organizationName: 'YNUWAIWAI',
  projectName: 'LiCOS',
  scripts: ['https://buttons.github.io/buttons.js'],
  tagline: 'The document for LiCOS',
  title: 'LiCOS',
  url: 'https://licos.online'
}
