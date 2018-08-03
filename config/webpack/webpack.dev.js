const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.js');

const resolve = dir => path.join(__dirname, '..', '..', dir);

//toDo hot module replace;

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  cache: true,
  devtool: 'eval',
  watchOptions: {
    poll: true
  },
  devServer: {
    contentBase: resolve('dist'),
    inline: true,
    hot: true,
    port: 3000,
    historyApiFallback: true
  },
  entry: [
    'babel-polyfill',
    'webpack/hot/only-dev-server',
    resolve('index.js'),
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
