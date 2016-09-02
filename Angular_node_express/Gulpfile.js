var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
	gulp.src('app/public/scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./app/public/css/'));
});

gulp.task('default', function() {
	gulp.watch('app/public/scss/*.scss', ['styles']);
});