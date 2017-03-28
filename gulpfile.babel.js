const gulp = require('gulp');
import gutil from 'gulp-util';
import Cache from 'gulp-file-cache';
const cache = new Cache();
import nodemon from 'gulp-nodemon';
import babel from 'gulp-babel';
import webpack from 'webpack';
import HubRegistry from 'gulp-hub';
import path from 'path';

import backendConfig from './webpack.config.backend';

//const hub = new HubRegistry(['./gulp/browser-sync.js', './gulp/test.js']);
//gulp.registry(hub);

//const requireDir = require('require-dir');

//import all tasks
//requireDir('./gulp');

//require('./gulp/server.js');

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

function onBuild(done) {
  return function(err, stats) {
    if(err) {
      console.log('Error', err);
    }
    else {
      console.log(stats.toString());
    }

    if(done) {
      done();
    }
  }
}

gulp.task('backend:watch', function() {
//  server.close();
  backendConfig.watch = true;
  return webpack(backendConfig).watch(100, (err, stats)=> {
    onBuild()(err, stats);
//    nodemon.emit('restart', 10);
    nodemon.restart();
  });
});

gulp.task('backend:run', gulp.series(['backend:watch'], function() {
    return nodemon({
    execMap: {
      js: 'node'
    },
    script: path.join(__dirname, 'dest/backend'),
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop'
  }).on('restart', function() {
    gutil.log(gutil.colors.blue('Restarted backend'));
  });
}));

gulp.task('default', gulp.series(['server:dev']));