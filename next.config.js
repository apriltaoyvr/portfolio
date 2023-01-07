const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'user-images.githubusercontent.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};
