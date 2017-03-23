var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackProdConfig = require('./webpack.config.prod.js');
var browserSync = require('browser-sync').create();
var browserSyncConfig = require('./browserSync.config.js');
var TestServer = require('karma').Server;
var rimraf = require('rimraf');
var fs = require('fs');
//var shell = require('gulp-shell');

gulp.task('default', ['browser-sync', 'tdd']);

gulp.task('browser-sync', function(done) {
  browserSync.init(browserSyncConfig, done);
});

gulp.task('test', function (done) {
    var server =  new TestServer({
        configFile: __dirname + '/karma.conf.js'
    });

    server.on('browser_error', function (browser, err){
        gutil.log('Karma Run Failed: ' + err.message);
        throw err;
    });

    server.on('run_complete', function (browsers, results){
        if (results.failed) {
            throw new Error('Karma: Tests Failed');
        }
        gutil.log('Karma Run Complete: No Failures');
        done();
    });

    server.start();
});

gulp.task('tdd', function () {
  var server =  new TestServer({
        configFile: __dirname + '/karma.conf.js'
    });
  server.start();

});

gulp.task('build', ['build:clean'], function (done) {
  
  gutil.log('Generating minified bundle. This will take a moment...');

  process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

  webpack(webpackProdConfig).run(function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
    gutil.log('[webpack:build]', stats.toString({
      chunks: false, // Makes the build much quieter
      colors: true
    }));
    
    done();
  });

});

gulp.task('build:clean', function (done) {
  gutil.log('cleaning dist directory');
  
  rimraf(path.join(__dirname, '/dist'), function (err) {
    if (err)
        throw new gutil.PluginError('build:clean', err);
    fs.mkdir(path.join(__dirname, '/dist'), function () {
      gutil.log('dist directory cleaned')
      done();
    });
  })
});
