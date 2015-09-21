// Include gulp
var gulp = require('gulp');
 // Define base folders
var src = 'assets/';
var dest = 'build/';
 // Include plugins
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var fs = require('fs');
var path = require('path');

function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}


 //  Minify JS
gulp.task('scripts', function() {

  var folders = getFolders(src);

   var tasks = folders.map(function(folder) {
      // minify
      // write to output again
      return gulp.src(path.join(src, folder, '/**/*.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest+'js'));
  });
});

 gulp.task('images', function() {
  return gulp.src(src + 'images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(dest + 'img'));
});

 // Watch for changes in files
gulp.task('watch', function() {

   // Watch .js files
  gulp.watch(src + 'js/*.js', ['scripts']);

   // Watch image files
  gulp.watch(src + 'images/**/*', ['images']);
 });

 // Default Task
gulp.task('default', ['scripts', 'images', 'watch']);