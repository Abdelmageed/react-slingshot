const gulp = require('gulp');
import gutil from 'gulp-util';
import Cache from 'gulp-file-cache';
const cache = new Cache();
import nodemon from 'gulp-nodemon';
import babel from 'gulp-babel';
//import webpack from 'webpack';
import HubRegistry from 'gulp-hub';
import path from 'path';
const browserSync = require('browser-sync').create();
const browserSyncDevConfig = require('./browserSync.config.dev.js');
const browserSyncProdConfig = require('./browserSync.config.prod.js');
//const browserSyncProdConfig = require('./browserSync.config.prod.js');
const TestServer = require('karma').Server;


//import backendConfig from './webpack.config.backend';

const hub = new HubRegistry(['./gulp/build.js']);
gulp.registry(hub);

//const requireDir = require('require-dir');

//import all tasks
//requireDir('./gulp');

//require('./gulp/server.js');

gulp.task('test', function (done) {
    const server =  new TestServer({
        configFile: path.join(__dirname, 'karma.conf.js')
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

gulp.task('tdd', function (done) {
  const server =  new TestServer({
        configFile: path.join(__dirname, 'karma.conf.js')
    });
  server.start();
  done();
});


gulp.task('compile', ()=> {

  return gulp
  .src('src/server/**/*.js')
  .pipe(cache.filter()) //remember files
  .pipe(babel({presets: ['es2015']}))
  .pipe(cache.cache())
  .pipe(gulp.dest('./dest/server'));
 
});

gulp.task('server:dev', gulp.series(['compile'], (done)=> {
  let called = false;
  let stream = nodemon({
    script: 'dest/server',
    watch: ['src/server/**/*.js'],
    tasks: ['compile']
  })
  .on('start', function () {
    if (!called) {
      called = true;
      done();
    }
  })
  .on('restart', ()=> {
    gutil.log(gutil.colors.blue('restarted backend server'));
  })
  .on('crash', ()=> {
    gutil.log( gutil.colors.red('Backend app crashed'));
    stream.emit('restart', 10);
  });
//  done();
  return stream;
}));

//gulp.task('browser-sync:dev', function(done) {
//  browserSync.init(browserSyncDevConfig, done);
//});

gulp.task('browser-sync:prod', gulp.series('build', function(done) {
  browserSync.init(browserSyncProdConfig, done);
}));

//function onBuild(done) {
//  return function(err, stats) {
//    if(err) {
//      console.log('Error', err);
//    }
//    else {
//      console.log(stats.toString());
//    }
//
//    if(done) {
//      done();
//    }
//  }
//}
//
//gulp.task('backend:watch', function() {
////  server.close();
//  backendConfig.watch = true;
//  return webpack(backendConfig).watch(100, (err, stats)=> {
//    onBuild()(err, stats);
////    nodemon.emit('restart', 10);
//    nodemon.restart();
//  });
//});
//
//gulp.task('backend:run', gulp.series(['backend:watch'], function() {
//    return nodemon({
//    execMap: {
//      js: 'node'
//    },
//    script: path.join(__dirname, 'dest/backend'),
//    ignore: ['*'],
//    watch: ['foo/'],
//    ext: 'noop'
//  }).on('restart', function() {
//    gutil.log(gutil.colors.blue('Restarted backend'));
//  });
//}));

gulp.task('default', gulp.series(['tdd', 'browser-sync:prod']));