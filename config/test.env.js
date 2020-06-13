'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  OPEN_PROXY: true  // 是否开启代理，重置后需要重启vue-cli
})
