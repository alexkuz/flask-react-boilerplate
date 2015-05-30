var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var SCRIPTS_PATH = 'server/static/scripts';
var TEMPLATES_PATH = 'server/templates';

module.exports = {
  target: 'web',

  entry: ['./client/entry'],

  resolve: {
    modulesDirectories: [
      'web_modules',
      'node_modules',
      'client'
    ],
    extensions: ['', '.js', '.jsx', '.scss']
  },

  plugins: [
    new CleanWebpackPlugin([SCRIPTS_PATH, TEMPLATES_PATH]),
    new webpack.DefinePlugin({
      NODE_ENV: process.env.NODE_ENV
    })
  ],

  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],

    loaders: [],

    noParse: /\.min\.js/
  }

};
