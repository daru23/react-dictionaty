/**
 * Created by daru on 18/10/2017.
 */
"use strict";

import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

gulp.task("default", () => {
   return browserify("src/app.js")
       .transform("babelify")
       .bundle()
       .pipe(source("bundle.js"))
       .pipe(gulp.dest("dist"))
});
