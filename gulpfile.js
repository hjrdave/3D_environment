var gulp = require('gulp');
var sass = require('gulp-sass');

/***Sass Task**/
gulp.task('sass', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

/***Sass Watch***/

gulp.task('watch', function(){
  gulp.watch('scss/styles.scss', ['sass']); 
  gulp.watch('scss/_partials/', ['sass']);
    
})