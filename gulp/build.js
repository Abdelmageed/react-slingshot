const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const rimraf = require('rimraf');
const fs = require('fs');
const webpack = require('webpack');
const webpackProdConfig = require('../webpack.config.prod.js');


gulp.task('build', gulp.series(buildClean, function (done) {
  
  gutil.log('Generating minified bundle. This will take a moment...');

  process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

  webpack(webpackProdConfig).run(function (err, stats) {
    if (err) {
      throw new gutil.PluginError('build', err);
    }
    gutil.log('[build]', stats.toString({
      chunks: false, // Makes the build much quieter
      colors: true
    }));
    
    done();
  });

}));

function buildClean(done) {
  gutil.log('cleaning dist directory');
  
  rimraf(path.join(__dirname, '/dist'), function (err) {
    if (err)
        throw new gutil.PluginError('build:clean', err);
    fs.mkdir(path.join(__dirname, '/dist'), function () {
      gutil.log('dist directory cleaned')
      done();
    });
  })
}

gulp.task('build:clean', buildClean);