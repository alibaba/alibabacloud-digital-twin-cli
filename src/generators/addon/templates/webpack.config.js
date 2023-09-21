const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'build'),
    libraryTarget: 'umd',
    library: `${pkg.name}`
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './demo/index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|jsx)$/,
        loader: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: [/node_modules/]
      },
      {
        test: /.(less|css)$/,

        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',

            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',

            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },

  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 8020,
    https: process.env.HTTPS ? true : false,
    allowedHosts: 'all',
    static: './demo'
  }
};
