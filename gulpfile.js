var gulp = require('gulp');
var sass 		= require('gulp-sass');
var watch		= require('gulp-watch');

gulp.task('default', function() {
	gulp.src('./public/sass/*')
		.pipe(sass())
		.pipe(gulp.dest('./public/css'))
});