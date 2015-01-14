var gulp = require('gulp');
var sass 		= require('gulp-sass');

gulp.task('default', function() {
	gulp.src('./public/sass/*')
		.pipe(sass())
		.pipe(gulp.dest('./public/css'))
});
