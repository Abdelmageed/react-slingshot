const gulp = require('gulp');
import HubRegistry from 'gulp-hub';

const hub = new HubRegistry(['./gulp/**/!(util).js']);
gulp.registry(hub);

gulp.task('default', gulp.series(['backend:run', 'browser-sync:dev', 'tdd']));