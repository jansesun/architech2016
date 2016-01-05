var gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');
gulp.task('default', function() {
	// gulp
});
// gulp build-require
gulp.task('build-require', function() {
	gulp.src(['js/lib/require.js', 'js/lib/require.config.js'])
		.pipe(concat('require.js'))
		// 这个重命名的后缀可以用时间戳增量也可以考虑用文件指纹，暂时写死
		.pipe(rename({
			suffix: '_160105'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('js/lib'));
});