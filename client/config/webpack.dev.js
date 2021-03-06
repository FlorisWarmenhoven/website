const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: '3010',
    hot: true,
    noInfo: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '..', 'src'),
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        loader: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
});
