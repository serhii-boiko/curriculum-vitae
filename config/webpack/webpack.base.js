const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');


function resolve(dir) {
  return path.join(__dirname, '..', '..', dir);
}

module.exports = {
  resolve: {
    alias: {
      '@app': resolve('src/app'),
      '@framework': resolve('src/framework'),
      '@node_modules': resolve('node_modules'),
      '@src': resolve('src'),
    }
  },
  entry: resolve('index.js'),
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: 'asserts/[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.main.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: "css-loader"
        }, {
          loader: 'postcss-loader',
        }, {
          loader: "sass-loader",
          options: {
            includePaths: [
              resolve('node_modules')
            ]
          }
        }]
      }),
    }]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),

    new HtmlWebpackPlugin({
      template: resolve('src/index.html'),
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};