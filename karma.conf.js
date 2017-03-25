var wepbackConfig = require ('./webpack.config.dev.js');
//remove entry, each spec files counts as an entry for webpack
delete wepbackConfig.entry;

module.exports = function(config) {
  config.set({
    basePath: 'src/client',
    frameworks: ['jasmine'],
    preprocessors: {
//      'src/**/(*.js)|(!spec.js)': ['coverage']
      '**/*.js': ['webpack', 'coverage']
    },
    reporters: [
      'progress',
      'htmlDetailed',
      'coverage',
      'coveralls'
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
    coverageReporter: {
      type: 'html',
      dir: '../coverage/'
    },
    webpack: 
            // you don't need to specify the entry option because
            // karma watches the test entry points
            // webpack watches dependencies

            // ... remainder of webpack configuration (or import)
      wepbackConfig
        ,

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i.e.
            noInfo: true,
            // and use stats to turn off verbose output
            stats: {
                // options i.e. 
                chunks: false
            }
        },
  });
}