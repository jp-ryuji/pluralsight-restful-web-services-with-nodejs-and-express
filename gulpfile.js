'use strict';

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const chalk = require('chalk');
const gulpMocha = require('gulp-mocha');

gulp.task('default', function() {
  nodemon({
    script: 'index.js',
    ext: 'js',
    env: {
      PORT: 8000
    },
    ignore: ['./node_modules/**']
  })
  .on('restart', function() {
    console.log(chalk.green('Restarting...'));
  });
});

gulp.task('test', function() {
  gulp.src('tests/*.js', { read: false })
      .pipe(gulpMocha({ reporter: 'nyan' }))
})
