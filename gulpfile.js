var gulp = require('gulp');
var sass = require('gulp-sass');

/***Sass Task**/
gulp.task('sass', function() {
    gulp.src('scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

/***Sass Watch***/

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['sass']); 
  
    
})