var gulp = require('gulp'),
    eslint = require('gulp-eslint');

gulp.task('lint', function () {
    return gulp.src(['test/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('default', ['lint'], function () {
    // This will only run if the lint task is successful...
});