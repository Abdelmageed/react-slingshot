import webpack from 'webpack';
import path from 'path';
import gulp from 'gulp';
import gutil from 'gulp-util';
import nodemon from 'nodemon';
import babel from 'gulp-babel';
import Cache from 'gulp-file-cache';
const cache = new Cache();
import backendConfig from '../webpack.config.backend';


function onBuild(done) {
  return function(err, stats) {
    if(err) {
      gutil.log(gutil.colors.red('Error', err));
    }
    else {
      console.log(gutil.colors.red(stats.toString('errors-only')));
    }

    if(done) {
      done();
    }
  }
}

gulp.task('backend:build', function(done) {
  webpack(backendConfig).run(onBuild(done));
});

gulp.task('backend:watch', function(done) {
  backendConfig.watch = true;
  return webpack(backendConfig).watch(100, (err, stats)=> {
    onBuild(done)(err, stats);
    nodemon.restart();
  });
});

gulp.task('backend:run', gulp.series(['backend:watch'], function(done) {
    nodemon({
    execMap: {
      js: 'node'
    },
    script: path.join(__dirname, '..', 'dist/backend'),
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop'
  }).on('restart', function() {
    gutil.log(gutil.colors.blue('Restarted backend'));
      done();
  });
  done();
}));
