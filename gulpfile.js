var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var nodemon = require('gulp-nodemon');
var pug = require('gulp-pug');
var puglint = require('gulp-pug-lint');
var sass = require('gulp-sass');
var sasslint = require('gulp-sass-lint');
var concat = require('gulp-concat');

var PATHS = {
  eslint: "**/*.js",
  sass: "src/assets/styles/**/*.sass",
  pug: "src/views/*.pug",
  bootstrap: "./node_modules/bootstrap/dist/css/bootstrap.css"
};

gulp.task('serve', ['nodemon', 'sass', 'pug'], () => {
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
  return gulp.src([PATHS.sass, PATHS.bootstrap])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('lint', ['lint-pug', 'lint-sass']);

gulp.task('lint-pug', function() {
  return gulp.src(PATHS.pug)
    .pipe(puglint());
});

gulp.task('lint-sass', function() {
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
