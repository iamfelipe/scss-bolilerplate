var gulp = require('gulp')
var cache = require('gulp-cache')
var babel = require('gulp-babel')
var concat = require('gulp-concat')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
var cssnano = require('gulp-cssnano')
var imagemin = require('gulp-imagemin')
var imageminPngquant = require('imagemin-pngquant')
var imageminZopfli = require('imagemin-zopfli')
var imageminMozjpeg = require('imagemin-mozjpeg') //need to run 'brew install
                                                  // libpng'
var imageminGiflossy = require('imagemin-giflossy')
var browserSync = require('browser-sync').create()

var jsSources = ['scripts/*.js'],
  sassSources = ['styles/**/*.scss'],
  htmlSources = ['**/*.tpl.php', '*.php', '*.html'],
  outputDir = 'dist',
  localProxy = 'https://callao.dd:8443/'

gulp.task('dev:styles', function () {
  return gulp.src(sassSources).pipe(sourcemaps.init()).pipe(sass().on('error', sass.logError)).pipe(sourcemaps.write('.')).pipe(gulp.dest('styles')).pipe(browserSync.stream())
})

gulp.task('prod:styles', function () {
  return gulp.src(sassSources).pipe(sourcemaps.init()).pipe(sass().on('error', sass.logError)).pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false,
  })).pipe(cssnano({
    discardUnused: {fontFace: false},
  })).pipe(sourcemaps.write('.')).pipe(gulp.dest('styles'))
})

gulp.task('dev:scripts', function () {
  return gulp.src(jsSources).pipe(sourcemaps.init()).pipe(babel({
    presets: ['es2015'],
  })).pipe(concat('scripts.js')).pipe(sourcemaps.write('.')).pipe(gulp.dest('js'))
})

gulp.task('prod:images', function () {
  return gulp.src('assets/images/**/*.{gif,png,jpg,svg}').pipe(cache(imagemin([
    //png
    imageminPngquant({
      speed: 1,
      quality: 98, //lossy settings
    }),
    imageminZopfli({
      more: true,
      iterations: 50, // very slow but more effective
    }),
    //gif
    // imagemin.gifsicle({
    //     interlaced: true,
    //     optimizationLevel: 3
    // }),
    //gif very light lossy, use only one of gifsicle or Giflossy
    imageminGiflossy({
      optimizationLevel: 3,
      optimize: 3, //keep-empty: Preserve empty transparent frames
      lossy: 2,
    }),
    //svg
    imagemin.svgo({
      plugins: [
        {
          removeViewBox: false,
        }],
    }),
    //jpg lossless
    imagemin.jpegtran({
      progressive: true,
    }),
    //jpg very light lossy, use vs jpegtran
    imageminMozjpeg({
      quality: 90,
    }),
  ]))).pipe(gulp.dest('assets/images'))
})

gulp.task('bs-reload', function () {
  browserSync.reload()
})

// Static server
gulp.task('serve', ['dev:watch'], function () {
  browserSync.init({
    // port: 4000,
    // proxy: localProxy,
    server: {
      baseDir: './',
    },
  })
})

// gulp.task('dev:watch', 'dev:styles', function () {
gulp.task('dev:watch', ['dev:styles'], function () {
  gulp.watch(sassSources, ['dev:styles'])
  gulp.watch(htmlSources, ['bs-reload'])
  // gulp.watch('js/**/*.js', ['dev:scripts']);
})
