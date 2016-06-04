var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();

var PATHS = {
  sass: "src/assets/styles/**/*.sass",
  html: "src/**/*.html",
};

gulp.task('serve', ['nodemon', 'sass'], function() {

    browserSync.init({
      proxy: 'localhost:4200'
    });

    gulp.watch(PATHS.sass, ['sass']);
    gulp.watch(PATHS.html).on('change', browserSync.reload);
});

gulp.task('production', ['sass'], function(){
    require('./src/server.js');
})

gulp.task('sass', function() {
   return gulp.src(PATHS.sass)
        .pipe(sass())
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
});

gulp.task('nodemon', function () {
  nodemon({
    script: './src/server.js'
  });
});

gulp.task('default', ['serve']);
