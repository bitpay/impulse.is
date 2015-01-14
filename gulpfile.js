var gulp   = require('gulp');
var sass   = require('gulp-sass');
var watch  = require('gulp-watch');
var deploy = require('gulp-gh-pages');

gulp.task('default', function() {
  gulp.src('./public/sass/*')
	  .pipe(sass())
	  .pipe(gulp.dest('./public/css'));
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src('./public/**/*').pipe( deploy({
    remoteUrl: 'git@github.com:bitpay/pulse.is'
  }) );
});
