var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('./css/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
	gulp.watch('./css/**/*.scss', ['sass']);
});