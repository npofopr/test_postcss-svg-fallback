'use strict';

var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	svgFallback = require('postcss-svg-fallback');

	var path = {
		build: {
			css: 'build/css/',
		},
		src: {
			css: 'src/css/style.css',
		},
	};

gulp.task('css', function () {
	var processors = [
		svgFallback({
			//basePath: 'src/images/svg',
			//dest: 'build/images/svg',
			fallbackSelector: '.no-svg',
			disableConvert: false
		})
	];
	gulp.src(path.src.css)
		.pipe(postcss(processors))
		.pipe(gulp.dest(path.build.css));
});


gulp.task('build', [
	'css'
]);

gulp.task('default', ['build']);
