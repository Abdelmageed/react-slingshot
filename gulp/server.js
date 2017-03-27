import webpack from 'webpack';
import path from 'path';
import gulp from 'gulp';
import gutil from 'gulp-util';
import reload from 'reload';
import nodemon from 'nodemon';
import babel from 'gulp-babel';
import Cache from 'gulp-file-cache';
const cache = new Cache();
import backendConfig from '../webpack.config.backend';

import config from '../src/server/config';
import app from '../src/server/app';
import server from '../src/server/index';


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

gulp.task('backend:build', function(done) {
  server.close();
  webpack(backendConfig).run(onBuild(done));
});

gulp.task('backend:watch', function() {
  server.close();
  webpack(backendConfig).watch(100, (err, stats)=> {
    onBuild()(err, stats);
//    nodemon.emit('restart', 10);
    nodemon.restart();
  });
});

gulp.task('backend:run', ['backend:watch'], function() {
    nodemon({
    execMap: {
      js: 'node'
    },
    script: path.join(__dirname, '..', 'dest/backend'),
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop'
  }).on('restart', function() {
    gutil.log('Restarted!');
  });
});

let reloadServer;
gulp.task('server:start', function(done){
  let server = app.listen(config.PORT, 'localhost', ()=> {
    gutil.log(`express server started at localhost:${config.PORT}`);
    done();
  });
  reloadServer = reload(server, app);
});

gulp.task('server:reload', function(done){
//  server.close();
//  server = app.listen(config.PORT, 'localhost', ()=> {
  reloadServer.reload();
  gutil.log(`express server restarted at localhost:${config.PORT}`);
  done();
//  });
});

gulp.task('compile', ()=> {

  return gulp
  .src('src/server/**/*.js')
  .pipe(cache.filter()) //remember files
  .pipe(babel({presets: ['es2015']}))
  .pipe(cache.cache())
  .pipe(gulp.dest('./dest/server'));
 
});

gulp.task('server:dev', ['compile'], (done)=> {
  let called = false;
  return nodemon({
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
    gutil.log('restarted backend server');
  })
  .on('crash', ()=> {
    gutil.log('Backend app crashed', gutil.colors.red);
    stream.emit('restart', 10);
  });
//  done();
//  return stream;
});

//const watcher = gulp.watch('src/server/**/*.js', ['server:reload']);
//watcher.on('change', (event)=> {
//  gutil.log(`File ${event.path} was ${event.type}, running tasks...`);
//});