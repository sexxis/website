var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var nodemon = require('gulp-nodemon');
var pug = require('gulp-pug');
var puglint = require('gulp-pug-lint');
var sass = require('gulp-sass');
var sasslint = require('gulp-sass-lint');

var PATHS = {
  eslint: "**/*.js",
  sass: "src/assets/styles/**/*.sass",
  pug: "src/views/*.pug"
};

gulp.task('serve', ['nodemon', 'sass', 'pug'], function() {
  browserSync.init({
    proxy: 'localhost:4200'
  });

  gulp.watch(PATHS.sass, ['sass']);
  gulp.watch(PATHS.pug, ['pug']);
});

gulp.task('build', ['sass', 'pug']);
gulp.task('pug', function() {
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

gulp.task('lint', ['eslint', 'puglint', 'sasslint']);
gulp.task('eslint', function() {
  return gulp.src(PATHS.eslint)
    .pipe(eslint({configFile: ".eslintrc.json"}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
gulp.task('puglint', function() {
  return gulp.src(PATHS.pug)
    .pipe(puglint());
});
gulp.task('sasslint', function() {
  return gulp.src(PATHS.sass)
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError());
});

gulp.task('nodemon', function() {
  nodemon({
    script: './src/server.js'
  });
});

gulp.task('default', ['serve']);
