var gulp = require("gulp"),
	download = require("gulp-download");

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
gulp.task("int", ["integration"], function() {});

/**
 * Run unit tests
 */
gulp.task("test", function() {});

/**
 * Run and watch unit tests
 */
gulp.task("dev", function() {});

/**
 * Master build task. Run all build related tasks here
 */
gulp.task("build", ["browserify"], function(){});

/**
 * Browserify app.js
 */
gulp.task("browserify", function(){});

/**
 * Run the development server
 */
gulp.task("server", function(){});

/**
 * Run all Nightwatch tests
 */
gulp.task("nightwatch", function() {});

/**
 * Run Nightwatch integration tests
 */
gulp.task("nightwatch-int", function() {});
