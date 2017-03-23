var path = require("path");
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.dev.js");
var browserSync = require("browser-sync").create();
var browserSyncConfig = require("./browserSync.config.js");
var TestServer = require("karma").Server;
// The development server (the recommended option for development)
gulp.task("default", ["browser-sync", "tdd"]);

gulp.task("browser-sync", function(done) {
  browserSync.init(browserSyncConfig, done);
});

gulp.task("test", function (done) {
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

gulp.task("tdd", function () {
  var server =  new TestServer({
        configFile: __dirname + '/karma.conf.js'
    });
  server.start();

});
