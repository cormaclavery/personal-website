var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['sass','html','watch']);

gulp.task('watch', function(){
  gulp.watch([
    'src/sass/*.scss'
    ], ['sass']);
  
  gulp.watch([
    'src/index.html'
    ], ['html']);
})

gulp.task('html', function() {
  return gulp.src('src/index.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('sass', function() {
  gulp.src('src/sass/*.scss')
  .pipe(sass())
  .pipe(minifyCSS())
  .pipe(autoprefixer({
    browsers: ['last 10 versions']
  }))
  .pipe(gulp.dest('build/styles'));
});


