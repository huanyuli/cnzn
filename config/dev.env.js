'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_ROOT:'"http://106.12.192.230:8080/"'
  // API_ROOT:'"http://192.168.0.106:8080/"'
  // API_ROOT: '"http://39.98.43.90/power/"',
  API_ROOT: '"http://47.92.229.44:8080/"',
})
