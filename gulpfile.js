var gulp            = require('gulp'),
    minifyCss       = require('gulp-minify-css'),
    sass            = require('gulp-sass'),
    watch           = require('gulp-watch'),
    compass         = require('gulp-compass'),
    concat          = require('gulp-concat'),
    minifyHTML      = require('gulp-minify-html');



gulp.task('sass', function () {
    gulp.src('./components/styles.scss')
        .pipe(sass())
        .pipe(minifyCss ())
        .pipe(gulp.dest('./assets/css/'))
});


gulp.task('minify-html', function() {
    var opts = {comments:true,spare:true};
  gulp.src('./layouts/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./assets/html/'))
});

gulp.task('default', function(){
        gulp.run('template:html', 'sass');
        gulp.watch('./components/**/*.scss', function(){
        gulp.run('sass');
    });
        gulp.watch('./layouts/*.html', function(){
            gulp.run('minify-html');
        });
});