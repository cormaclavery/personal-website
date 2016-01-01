var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', ['sass','html','watch']);

gulp.task('serve', ['sass'], function(){
  browserSync.init({
    
    server: {
      baseDir: "build/"
    }

  });
  gulp.watch("src/sass/*.scss", ['sass']);
  gulp.watch("src/*.html", ['html']).on('change', browserSync.reload);
});

// gulp.task('watch', function(){
//   gulp.watch([
//     'src/sass/*.scss'
//     ], ['sass']);
  
//   gulp.watch([
//     'src/index.html'
//     ], ['html']);
// })

gulp.task('html', function() {
  return gulp.src('src/**.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('sass', function() {
  gulp.src('src/sass/*.scss')
  .pipe(sass())
  .pipe(minifyCSS())
  .pipe(autoprefixer({
    browsers: ['last 10 versions']
  }))
  .pipe(gulp.dest('build/styles'))
  .pipe(browserSync.stream());
});


