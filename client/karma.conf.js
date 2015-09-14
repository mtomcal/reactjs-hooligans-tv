var path = require('path');

module.exports = function (config) {
  config.set({

    browsers: [ 'PhantomJS' ],

    singleRun: false,

    frameworks: [ 'phantomjs-shim', 'mocha' ],

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'spec' ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src'), exclude: /node_modules/}, 
            {test: /\.css$/, loader: 'style!css'}, 
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
      },
      plugins: [
      ]
    },
    webpackServer: {
      noInfo: true
    }
  });
};