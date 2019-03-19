'use strict'

import gulp from 'gulp'

import sourcemaps from 'gulp-sourcemaps'
import postcss from 'gulp-postcss'
import sass from 'gulp-sass'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import { create as bsCreate } from 'browser-sync'
import cache from 'gulp-cache'
import imagemin from 'gulp-imagemin'
import imageminPngquant from 'imagemin-pngquant'
import imageminZopfli from 'imagemin-zopfli'
import imageminMozjpeg from 'imagemin-mozjpeg' //need to run 'brew install
import imageminGiflossy from 'imagemin-giflossy' //need to run 'brew install

const browserSync = bsCreate()

const dirs = {
  src: 'src',
  dest: 'dist',
}

const cssPaths = {
  srcFiles: `styles/**/*.scss`,
  destDir: `styles`,
}

const
  SCRIPTS_SOURCES = ['scripts/*.js'],
  HTML_SOURCES = ['**/*.tpl.php', '*.php', '*.html'],
  LOCAL_PROXY = 'https://callao.dd:8443/'

gulp.task('dev:styles', () => {
  return gulp.src(cssPaths.srcFiles)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cssPaths.destDir))
    .pipe(browserSync.stream())
})

gulp.task('prod:styles', () => {
  const plugins = [
    autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }),
    // cssnano({
    //   discardUnused: {fontFace: false},
    // }),
  ]
  return gulp.src(cssPaths.srcFiles)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    // Use postcss with autoprefixer and compress the compiled file using cssnano
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cssPaths.destDir))
})

gulp.task('dev:scripts', () => {
  return gulp.src(SCRIPTS_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write('.')).pipe(gulp.dest('js'))
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

// A simple task to reload the page
gulp.task('reload', function () {
  browserSync.reload()
})

// Bring up the browser and serve app
gulp.task('default', function () {
  browserSync.init({
    // port: 4000,
    // proxy: LOCAL_PROXY,
    server: {
      baseDir: './',
    },
  })
  gulp.watch(cssPaths.srcFiles, gulp.series('dev:styles'))
  // We should tell gulp which files to watch to trigger the reload
  // This can be html or whatever you're using to develop your website
  // Note -- you can obviously add the path to the Paths object
  gulp.watch(HTML_SOURCES).on('change', browserSync.reload)
})

gulp.task('dev:watch', function () {
  gulp.watch(cssPaths.srcFiles, gulp.series('dev:styles'))
  gulp.watch(HTML_SOURCES, gulp.series('reload'))
})


