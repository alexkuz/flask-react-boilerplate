require('babel-polyfill');

var isProduction = process.env.NODE_ENV === 'production';
var config = isProduction ?
  require('./webpack.prod.config.js') :
  require('./webpack.dev.config.js');

module.exports = config;
