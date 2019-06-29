var gulp = require('gulp'),
  connect = require('gulp-connect'),
  gulpSass = require('gulp-sass'),
  gulpAutoprefixer = require('gulp-autoprefixer');
 
gulp.task('connect', function() {
  connect.server({
    root: 'web',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./web/*.html')
    .pipe(connect.reload());
});

gulp.task('sass', function () {
    gulp.src('./web/scss/*.scss')
      .pipe(gulpSass())
      .pipe(gulpAutoprefixer())
      .pipe(gulp.dest('./web/dist'))
      .pipe(connect.reload())
  });
 
gulp.task('watch', function () {
  gulp.watch(['./web/*.html'], ['html']);
  gulp.watch(['./web/scss/*.scss'], ['sass']);
});
 
gulp.task('default', ['connect', 'sass', 'watch']);