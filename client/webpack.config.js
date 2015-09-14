var path = require('path');
var webpack = require('webpack');

var config = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }, 
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }

    ]
  }
};

if (process.env.NODE_ENV !== "production") {
  config.devtool = 'eval';
}

module.exports = config;
