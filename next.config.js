const withTM = require('next-transpile-modules')([
  'lodash-es'
])

const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const withPlugins = require('next-compose-plugins')
const nextBuildId = require('next-build-id')

const dev = process.env.NODE_ENV === 'development'

module.exports = withPlugins([
  [withTM],
  [withPWA]
], {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  future: {
    webpack5: true,
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pokemon',
        permanent: true,
      },
    ]
  },
})
