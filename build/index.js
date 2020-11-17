const { merge } = require('webpack-merge')
const webpack = require('webpack')

const baseOpt = require('./webpack.config.base')
const prodOpt = require('./webpack.config.prod')
const devOpt = require('./webpack.config.dev')
const packageOpt = require('../package.json')

const LICENSE_TEMPLATE =
  'zz v' + packageOpt.version + '\r\n' +
  '(c) 2020 Jyunzn\r\n' +
  'Released under the ' + packageOpt.license + ' License';

module.exports = (env, argv) => {
  switch (env.m) {
    case 'dev':
      return merge(baseOpt, devOpt)
    case 'build':
      switch (argv.mode) {
        case 'development':
          return merge(baseOpt, prodOpt, {
            plugins: [
              new webpack.BannerPlugin(LICENSE_TEMPLATE)
            ]
          })
        case 'production':
          return merge(baseOpt, prodOpt)
        default:
          throw new Error('No Matching --mode')
      }
    default:
      throw new Error('No Matching --env m')
  }
}
