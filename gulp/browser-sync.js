const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const browserSyncDevConfig = require('../browserSync.config.dev.js');
const browserSyncProdConfig = require('../browserSync.config.prod.js');
import HubRegistry from 'gulp-hub';

const hub = new HubRegistry(['./gulp/build.js']);

gulp.registry(hub);


gulp.task('browser-sync:dev', function(done) {
  browserSync.init(browserSyncDevConfig, done);
});

gulp.task('browser-sync:prod', gulp.series('build', function(done) {
  browserSync.init(browserSyncProdConfig, done);
}));