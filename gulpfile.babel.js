var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.dev.js");
var browserSync = require("browser-sync").create();
var browserSyncConfig = require("./browserSync.config.js");
// The development server (the recommended option for development)
gulp.task("default", ["browser-sync"]);

gulp.task("browser-sync", function(callback) {
  browserSync.init(browserSyncConfig);
});