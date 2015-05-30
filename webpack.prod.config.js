'use strict';

var update = require('react/lib/update');
var webpack = require('webpack');
var config = require('./webpack.base.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var SCRIPTS_PATH = 'server/static/scripts';

config = update(config, {
  bail: { $set: true },

  debug: { $set: false },

  profile: { $set: false },

  devtool: { $set: '#source-map' },

  output: {
    $set: {
      path: SCRIPTS_PATH,
      pathInfo: true,
      publicPath: '/static/scripts/',
      filename: 'bundle.[hash].min.js'
    }
  },

  plugins: {
    $push: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({ output: {comments: false} }),
      new HtmlWebpackPlugin({
        inject: true,
        filename: '../../templates/index.html',
        template: 'client/views/index.tpl'
      })
    ]
  },

  module: {
    loaders: {
      $push: [
        { test: /\.jsx?$/, loaders: ['babel?stage=0&optional=runtime'], exclude: /node_modules/ }
      ]
    }
  }
});

module.exports = config;
