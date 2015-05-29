'use strict';

var path = require('path');

var webpack = require('webpack');
var config = require('./webpack.base.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var devHTML = process.env.DEV_HTML;

config.bail = true;
config.debug = false;
config.profile = false;
config.devtool = '#source-map';

config.output = {
  path: './server/static/scripts',
  pathInfo: true,
  publicPath: '/static/scripts/',
  filename: 'bundle.[hash].min.js'
};

if (!devHTML) {
  config.plugins = config.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ output: {comments: false} }),
    new HtmlWebpackPlugin({
      filename: '../../templates/index.html',
      template: 'client/views/index.tpl'
    })
  ]);
} else {
  config.plugins = config.plugins.concat([
    new HtmlWebpackPlugin({
      filename: '../../templates/index.dev.html',
      template: 'client/views/index.tpl',
      devBundle: 'http://localhost:3000/client/main.js'
    })
  ]);
}

config.module.loaders = config.module.loaders.concat([
  { test: /\.jsx?$/, loaders: ['babel?stage=0&optional=runtime'], exclude: /node_modules/ }
]);

module.exports = config;
