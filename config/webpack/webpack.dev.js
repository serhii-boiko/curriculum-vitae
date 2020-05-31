const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.js');

const resolve = dir => path.join(__dirname, '..', '..', dir);

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  cache: true,
  devtool: 'eval',
  watchOptions: {
    poll: true,
  },
  devServer: {
    contentBase: [resolve('./dist/'), resolve('./src/')],
    publicPath: '/assets/',
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 3000,
  },
  context: resolve('./src'),
  entry: [
    'webpack/hot/only-dev-server',
    resolve('./src/index.js'),
  ],
  output: {
    path: resolve('./dist/assets'),
    filename: 'app.js',
    publicPath: './assets/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: resolve('.babelrc'),
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        use: 'react-hot-loader/webpack',
        include: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
