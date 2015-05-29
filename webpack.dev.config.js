'use strict';

var webpack = require('webpack');
var config = require('./webpack.base.config.js');

if (process.env.NODE_ENV !== 'test') {
  config.entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    config.entry
  ];
}

config.devtool = 'eval-source-map';

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin()
]);

config.module.loaders = config.module.loaders.concat([
  { test: /\.jsx?$/, loaders: [ 'react-hot', 'babel?stage=0&optional=runtime' ], exclude: /node_modules/ }
]);

config.devServer = {
  publicPath: 'http://localhost:3000/client/',

  port: 3000,

  contentBase: './client/',

  inline: true,

  hot: true,

  stats: {
    colors: true
  },

  historyApiFallback: true,

  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3001',
    'Access-Control-Allow-Headers': 'X-Requested-With'
  }
};

module.exports = config;
