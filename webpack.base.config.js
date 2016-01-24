var webpack = require('webpack');

module.exports = {
  target: 'web',

  resolve: {
    modulesDirectories: [
      'web_modules',
      'node_modules',
      'client'
    ],
    extensions: ['', '.js', '.jsx', '.scss']
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: process.env.NODE_ENV
    })
  ],

  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],

    loaders: [
      { test: /\.svg$/, loaders: ['babel', 'react-svg'] }
    ],

    noParse: /\.min\.js/
  }

};
