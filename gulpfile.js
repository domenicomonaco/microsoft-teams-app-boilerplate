// Copyright (c) Domenico Monaco. All rights reserved.
// Licensed under the MIT License.

var gulp = require('gulp');

gulp.task('update', function () {
    gulp.src('.publish/*').pipe(gulp.dest('deploy'));
    gulp.watch(['.publish/**/*'], function(file) {
        return gulp.src('.publish/*')
            .pipe(gulp.dest('deploy/'));
        });
    });


       