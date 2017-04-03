var wepbackConfig = require ('./webpack.config.dev.js');
//remove entry, each spec files counts as an entry for webpack
delete wepbackConfig.entry;

module.exports = function(config) {
  config.set({
    basePath: 'src',
    frameworks: ['jasmine'],
//    preprocessors: {
////      'src/**/(*.js)|(!spec.js)': ['coverage']
//      '**/*.js': ['webpack', 'coverage']
//    },
    reporters: [
      'progress',
      'htmlDetailed',
//      'coverage',
//      'coveralls'
    ],
    files: [
      '**/*.js',
//      {
//        pattern: '.**/*.html',
//        watched: false,
//        served: true,
//        included: false
//      }
    ],
    browsers: ['Chrome'],
    htmlDetailed: {
      dir: '../_reports'
    },
//    coverageReporter: {
//      type: 'html',
//      dir: '../coverage/'
//    },
//    webpack: 
//            // you don't need to specify the entry option because
//            // karma watches the test entry points
//            // webpack watches dependencies
//
//            // ... remainder of webpack configuration (or import)
//      { //kind of a copy of your webpack config
//  devtool: 'cheap-eval-map', //fastest
//  module: {
//    loaders: [
//      {
//        test: /\.js$/,
//        exclude: /\/node_modules\//,
//        loader: 'babel-loader'
//      }
//    ]
//  },
//  externals: {
//    'cheerio': 'window',
//    'react/addons': true,
//    'react/lib/ExecutionEnvironment': true,
//    'react/lib/ReactContext': true
//  }
//}
//        ,
//
//        webpackMiddleware: {
//            // webpack-dev-middleware configuration
//            // i.e.
//            noInfo: true,
//            // and use stats to turn off verbose output
//            stats: 'errors-only'
//        },
  });
}