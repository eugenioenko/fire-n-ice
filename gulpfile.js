const jshint = require('gulp-jshint');
const gulp   = require('gulp');
const gutil  = require('gulp-util');
const concat = require('gulp-concat');
var gap = require('gulp-append-prepend');


gulp.task('default', function() {
  return gutil.log('Gulp started')
});


gulp.task('lint', function() {
  return gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('wrap', function(){
    gulp.src('js/firenice.js')
    .pipe(gap.prependText('(function(){ \n "use strict";'))
    .pipe(gap.appendText('})();'))
    .pipe(gulp.dest('js/'));
});

gulp.task('combine', function() {
  return gulp.src(['src/constants.js', 'src/struct.js', 'src/keyboard.js', 'src/sound.js', 'src/tiles.js', 'src/tilemap.js', 'src/sprite.js', 'src/animsprite.js', 'src/player.js', 'src/fire.js', 'src/ice.js', 'src/sfx.js', 'src/levels.js', 'src/engine.js', 'src/game.js'])
    .pipe(concat({ path: 'firenice.js'}))
    .pipe(gulp.dest('./js'));
});

gulp.watch('src/*.js', ['lint', 'combine']);
gulp.watch('js/firenice.js', ['wrap']);