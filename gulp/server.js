const gulp = require('gulp');
const gutil = require('gulp-util');

import config from '../src/server/config';
import server from '../src/server/server';

let app;
gulp.task('server:start', function(done){
  app = server.listen(config.PORT, 'localhost', ()=> {
    gutil.log(`express server started at localhost:${config.PORT}`);
    done();
  });
});

gulp.task('server:reload', function(done){
  app.close();
  app.listen(config.PORT, 'localhost', ()=> {
        gutil.log(`express server restarted at localhost:${config.PORT}`);
    done();
  });
});

const watcher = gulp.watch('*.js', ['server:reload']);
watcher.on('change', (event)=> {
  gutil.log(`File ${event.path} was ${event.type}, running tasks...`);
});