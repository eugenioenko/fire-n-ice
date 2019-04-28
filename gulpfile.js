const jshint = require('gulp-jshint');
const gulp   = require('gulp');
const gutil  = require('gulp-util');
const concat = require('gulp-concat');

gulp.task('default', function() {
  return gutil.log('Gulp started')
});


gulp.task('lint', function() {
  return gulp.src('./src/*.js')
    .pipe(jshint({esnext:true}))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('combine', function() {
  return gulp.src(['src/constants.js', 'src/struct.js', 'src/resources.js', 'src/keyboard.js', 'src/sound.js', 'src/tiles.js', 'src/tilemap.js', 'src/sprite.js', 'src/animsprite.js', 'src/player.js', 'src/fire.js', 'src/jar.js', 'src/ice.js', 'src/metal.js', 'src/sfx.js', 'src/levels.js', 'src/scene.js', 'src/engine.js', 'src/game.js'])
    .pipe(concat({ path: 'firenice.js'}))
    .pipe(gulp.dest('./js'));
});

gulp.watch('src/*.js', ['lint', 'combine']);
