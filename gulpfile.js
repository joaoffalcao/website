var gulp = require('gulp');
var tasks = require('bf-gulp-tasks');

// ESLINT
gulp.task('eslint:source', function () {
    return tasks.eslint.app.source('src/**/*.js', {
        modules: true
    });
});

gulp.task('eslint:tests', function () {
    return tasks.eslint.app.tests();
});

gulp.task('eslint', ['eslint:source', 'eslint:tests']);

// UNIT TESTING
gulp.task('test', ['templates'], function () {
    return tasks.karma();
});

// CHECK
gulp.task('check', ['eslint', 'test']);

// SANDBOX
gulp.task('sass', function () {
    return tasks.sass.sandbox();
});

gulp.task('images', function () {
    return tasks.images.sandbox();
});

gulp.task('templates', function () {
    return tasks.templates()
        .pipe(gulp.dest('./src'));
});

gulp.task('browserify', ['templates', 'sass', 'images'], function () {
    return tasks.browserify.sandbox('/src/bf-website.js', [
        'angular',
        'ng-extensions'
    ]);
});

gulp.task('serve', ['browserify'], function () {
    return tasks.webserver();
});

// FUNCTIONAL TESTING
// runs webserver without open the browser
gulp.task('serve:protractor', ['browserify'], function () {
    return tasks.webserver({
        open: false
    });
});

gulp.task('functional', ['serve:protractor'], function () {
    return tasks.protractor.local();
});

// DOCS
gulp.task('docs', function () {
    return tasks.ngdocs('src/**/*.{js,ngdoc}', {
        title: 'website'
    });
});

// RELEASE
gulp.task('changelog', function () {
    return tasks.changelog({
        presetConfig: {
            // rallyApiKey: _RALLY_API_KEY_,
            // gitlabApiKey: _GITLAB_API_KEY_
        }
    });
});

gulp.task('bump', function () {
    return tasks.bump();
});

gulp.task('release', ['bump']);

// DIST
gulp.task('dist:images', function () {
    return tasks.images.dist();
});

gulp.task('dist:sass', function () {
    return tasks.sass.dist();
});

gulp.task('dist:js', function () {
    return tasks.browserify.build('/src/bf-website.js', [
        'angular',
        'ng-extensions'
    ]);
});

gulp.task('dist', ['dist:images', 'dist:sass', 'dist:js']);
