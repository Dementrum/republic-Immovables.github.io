module.exports = function () {
    $.gulp.task('styles:build', () => {
        return $.gulp.src('./dev/static/stylus/main.styl')
            .pipe($.gp.stylus({
                'include css': true,
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.groupCssMediaQueries())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./build/static/css/'))
    });

    $.gulp.task('styles:dev', () => {
        return $.gulp.src('./dev/static/stylus/main.styl')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sourcemaps.identityMap())
            .pipe($.gp.stylus({
                'include css': true
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'Stylus',
                    message: error.message
                };
            }))
            .pipe($.gp.pxtorem({
                replace: false,
                propList: ['*'],
                minPixelValue: 1
            }))
            .pipe($.gp.groupCssMediaQueries())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gulp.dest('./build/static/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    
            
    });
};
