const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it', 'fr'],
  },
  localePath: path.resolve('./public/static/locales')
}
