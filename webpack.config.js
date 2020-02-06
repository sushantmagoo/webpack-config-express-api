// !NOTE: COMMONJS MODULES UNLIKE REST OF PROJECT
var path = require('path');
var webpack = require('webpack');
var Dotenv = require('dotenv-webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['@babel/polyfill', './app.js'],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: path.join(__dirname, 'config', '.env')
    })
  ]
};
