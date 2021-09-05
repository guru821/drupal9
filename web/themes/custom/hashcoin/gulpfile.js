const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const remame = require('gulp-rename')
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const { src, series, parallel, dest, watch } = require('gulp');



function style() {
  return src('./scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe((postcss([autoprefixer('last 2 version', 'ie 8', 'ie 9')])))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('css'))
}

function jsTask() {
  return src('./js/modules/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('custom.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('js'));
}


function watchTask() {
  watch(['./scss/**/*.scss', './js/modules/**/*.js'], { interval: 1000 }, parallel(style, jsTask));
}
exports.style = style
exports.jsTask = jsTask
exports.default = series(
  parallel(jsTask, style),
  watchTask
);