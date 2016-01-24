'use strict';

var update = require('react/lib/update');
var webpack = require('webpack');
var config = require('./webpack.base.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var CleanWebpackPlugin = require('clean-webpack-plugin');

var SCRIPTS_PATH = 'server/static/scripts';
var TEMPLATES_PATH = 'server/templates';

config = update(config, {
  bail: { $set: true },

  entry: { $set: ['./client/entry'] },

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
      new CleanWebpackPlugin([SCRIPTS_PATH, TEMPLATES_PATH]),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({ output: { comments: false } }),
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
        { test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/ }
      ]
    }
  }
});

module.exports = config;
