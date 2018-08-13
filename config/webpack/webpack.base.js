const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


function resolve(dir) {
  return path.join(__dirname, '..', '..', dir);
}

module.exports = {
  resolve: {
    alias: {
      '@src': resolve('src'),
      '@public': resolve('public'),
    }
  },
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: 'asserts/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            emitWarning: true,
          },
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        }
      },
      {
        test: /\.main.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader',
          }, {
            loader: 'sass-loader',
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
      template: resolve('public/index.html'),
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};
