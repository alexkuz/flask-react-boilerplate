'use strict';

var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.base.config.js');
var update = require('react/lib/update');
var ExportFilesWebpackPlugin = require('export-files-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

if (process.env.NODE_ENV !== 'test') {
  config = update(config, {
    entry: {
      $splice: [[
        0, 0,
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server'
      ]]
    }
  });
}

config = update(config, {
  debug: { $set: true },

  profile: { $set: true },

  devtool: { $set: 'eval-source-map' },

  output: {
    $set: {
      path: path.join(process.cwd(), '/client'),
      pathInfo: true,
      publicPath: 'http://localhost:3000/client/',
      filename: 'main.js'
    }
  },

  plugins: {
    $push: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        filename: 'server/templates/index.html',
        template: 'client/views/index.tpl'
      }),
      new ExportFilesWebpackPlugin('server/templates/index.html')
    ]
  },

  module: {
    loaders: {
      $push: [
        { test: /\.jsx?$/, loaders: [ 'react-hot', 'babel?stage=0&optional=runtime' ], exclude: /node_modules/ }
      ]
    }
  },

  devServer: {
    $set: {
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
    }
  }
});

module.exports = config;
