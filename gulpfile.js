//Dependencies
var gulp = require('gulp');
var run = require('gulp-run-command').default;
var bs = require('browser-sync').create(); // create a browser sync instance.
var sass = require('gulp-sass');
var scss = "./scss/**/*.scss";
var destCss = "./css";

gulp.task('browser-sync', function () {
    bs.init({
        proxy: "http://samplemvc.local/" // makes a proxy for localhost:3000
    });
});

gulp.task('sass:watch', function () {
    return gulp.watch(scss, gulp.series('sass'));
});

gulp.task('sass', function () {
    console.log('Sass was called!')
    return gulp.src(scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(destCss))
        .pipe(bs.stream());

});

gulp.task('default', gulp.parallel('sass', 'sass:watch','browser-sync'), function (done) {
    browserSync.reload();
    done();
});

