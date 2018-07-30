const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');

const resolve = (dir) => path.join(__dirname, '..', '..', dir);

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
});