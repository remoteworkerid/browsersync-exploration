var gulp = require('gulp')
var bs = require('browser-sync').create();

gulp.task('bs', function (){
    bs.init({
        server: {
            baseDir: "./",
        }
    });
});