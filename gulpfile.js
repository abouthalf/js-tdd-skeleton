var gulp = require("gulp"),
	download = require("gulp-download"),
	server = require("gulp-webserver"),
	karma = require("karma"),
	del = require("del"),
	browserify = require("browserify"),
	uglify = require("gulp-uglify"),
	source = require("vinyl-source-stream"),
	buffer = require("vinyl-buffer"),
	sourcemaps = require("gulp-sourcemaps");

/**
 * Build the JavaScript application using Browserify
 * Start a local development server for the project
 * Open your default browser to the local server, loading the project
 * Start a watcher which will re-build the project upon any file changes
 */
gulp.task("default", ["build", "server"], function(){
	gulp.watch("./src/**/*", ["build"]).on("change", function(e) {
		console.log("File: " + e.path + " was " + e.type + "…");
	});
});

/**
 * Download additional non-NPM libraries like Selenium
 */
gulp.task("libs", function() {
	var selenium = "http://selenium-release.storage.googleapis.com/2.48/selenium-server-standalone-2.48.2.jar";
	download(selenium)
		.pipe(gulp.dest("bin/"));
});

/**
 * Build the JavaScript application using Browserify
 * Start the local development server
 * Run all functional tests tagged with “integration” using Nightwatch
 * Shut down Nightwatch and the local server upon completion or test failure
 */
gulp.task("integration", ["build", "server", "nightwatch-int"], function() {});

/**
 * Alias for "integration"
 */
gulp.task("int", ["integration"]);

/**
 * Run unit tests with Karma once and quit
 *
 * @see https://github.com/karma-runner/gulp-karma/blob/master/gulpfile.js
 */
gulp.task("test", function(done) {
	new karma.Server({
			configFile: __dirname + "/karma.conf.js",
			singleRun: true // override the config
		},
		done).start();
});

/**
 * Run and watch unit tests
 * Ctrl + C to quit
 *
 * @see https://github.com/karma-runner/gulp-karma/blob/master/gulpfile.js
 */
gulp.task("tdd", function(done) {
	new karma.Server({
			configFile: __dirname + "/karma.conf.js"
		},
		done).start();
});

/**
 * Master build task. Run all build tasks from here
 * Add additional build tasks to the dependencies
 */
gulp.task("build", ["clean", "browserify"]);

/**
 * Clean the JavaScript output directory
 */
gulp.task("clean", function(){
	return del("./www/js/**/*.js");
});

/**
 * Browserify app.js
 *
 * Browserify app.js, add sourcemaps, and uglify
 * Use vinyl-source-stream and vinyl-buffer to make browserify gulp-friendly
 *
 * @see https://wehavefaces.net/gulp-browserify-the-gulp-y-way-bb359b3f9623
 */
gulp.task("browserify", ["clean"], function(){
	browserify("./src/app.js",{debug: true}) // browserify with sourcemaps enabled via debug
		.bundle() // create the app bundle
		.pipe(source("app.js")) // convert browserify text stream into a streaming vinyl file object
		.pipe(buffer()) // convert streaming vinyl file object to buffered vinyl file object
		.pipe(sourcemaps.init({loadMaps: true})) // init sourcemaps with source maps loaded from browserify
		.pipe(uglify()) // compress JavaScript output
		.pipe(sourcemaps.write()) // write sourcemaps back to compressed file
		.pipe(gulp.dest("./www/js")); // output JavaScript
});

/**
 * Run the development server with live-reload
 * Automatically open the default browser
 *
 * Ctrl+C to stop the server
 *
 * @see https://www.npmjs.com/package/gulp-webserver
 */
gulp.task("server", function(){
	gulp.src("www/")
		.pipe(server({
			livereload: true,
			log: true,
			open: true
		}));
});

/**
 * Run all Nightwatch tests
 */
gulp.task("nightwatch", function() {});

/**
 * Run Nightwatch integration tests
 */
gulp.task("nightwatch-int", function() {});
