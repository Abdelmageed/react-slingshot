const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const TestServer = require('karma').Server;

gulp.task('test', function (done) {
    const server =  new TestServer({
        configFile: path.join(__dirname, '..', 'karma.conf.js')
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
  const server =  new TestServer({
        configFile: path.join(__dirname, '..', 'karma.conf.js')
    });
  server.start();

});
