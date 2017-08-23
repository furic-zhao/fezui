/* =======================================
 * @ 2017 FEZUI 现代响应式的多终端UI交互组件库
 * https://github.com/furic-zhao/fezui
 * ======================================= */

import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import less from 'gulp-less';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';

function compileLess() {
    return gulp.src('./src/styles/index.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie > 8']
        }))
        .pipe(cleanCSS())
        .pipe(rename('fezui.css'))
        .pipe(gulp.dest('./dist/css'));
}

function compileFonts() {
    return gulp.src('./src/styles/common/iconfont/fonts/*.*')
        .pipe(gulp.dest('./dist/fonts'));
}

gulp.task('default', gulp.series(
    compileLess,
    compileFonts
));
