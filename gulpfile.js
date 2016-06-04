var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();

var PATHS = {
  sass: "src/assets/styles/**/*.sass",
  pug: "src/views/*.pug",
};

gulp.task('serve', ['nodemon', 'sass', 'pug'], function() {
  browserSync.init({
    proxy: 'localhost:4200'
  });

  gulp.watch(PATHS.sass, ['sass']);
  gulp.watch(PATHS.pug, ['pug']);
});

gulp.task('build', ['sass', 'pug']);

gulp.task('pug', function () {
  return gulp.src(PATHS.pug)
    .pipe(pug())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function() {
  return gulp.src(PATHS.sass)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('nodemon', function () {
  nodemon({
    script: './src/server.js'
  });
});

gulp.task('default', ['serve']);
