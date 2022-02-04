const { src, dest } = require('gulp');
const concat = require('gulp-concat');

const cssBundle = () =>
  src([
    'src/css/modules/*',
  ])
    .pipe(concat('App.css'))
    .pipe(dest('src/css'));

exports.cssBundle = cssBundle;