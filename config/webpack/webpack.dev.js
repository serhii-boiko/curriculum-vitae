const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');

const resolve = dir => path.join(__dirname, '..', '..', dir);

//toDo hot module replace;

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    contentBase: resolve('dist'),
    compress: true,
    port: 9000
  }
});