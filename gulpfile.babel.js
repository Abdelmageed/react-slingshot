const gulp = require('gulp');
const requireDir = require('require-dir');

//import all tasks
requireDir('./gulp');

gulp.task('default', ['browser-sync:dev', 'tdd', 'server:start']);

//changesz



