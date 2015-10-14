# TDD skeleton project for JavaScript web-applications

This is a skeleton project which includes:

* [Gulp](http://gulpjs.com) for running build and test tasks
* [Browserify](http://browserify.org) for building JavaScript and managing dependencies
* [Uglify](https://www.npmjs.com/package/uglify-js) for compressing JavaScript output
* [Source maps](https://www.npmjs.com/package/gulp-sourcemaps) for easy browser debugging
* [Karma](https://karma-runner.github.io/) for running unit tests
* [Mocha](http://mochajs.org) test framework for unit tests
* [Chai](https://duckduckgo.com/?q=chai+js&t=osx) assertion library 
* [SinonJS](http://sinonjs.org) for mocking JavaScript objects and browser features
* [PhantomJS](http://phantomjs.org) browser for running JavaScript tests quietly and heedlessly from the command line.
* [Nightwatch](http://nightwatchjs.org) for automated browser testing

The project is to provides a directory structure and build configuration to support test driven development for a browser based JavaScript application.

## How to use this project

Download or clone this project as a starting point for your own project. Add your own HTML, CSS, JavaScript, and Gulp tasks as needed. *Or*, simply use this project as a reference when creating a new project by hand.

## Requirements and assumptions

* Basic familiarity with the command line
* NodeJS v0.12.7 or later is installed
* Gulp.js installed globally
* Basic familiarity with the Gulp.js build system
* Basic familiarity with Git version control (just enough to get a copy of this project onto your computer or development environment)
* Familiarity with Browserify and CommonJS style modular JavaScript development and dependency management.
* Firefox browser installed 
* Java 1.7 or newer installed (required for the Selenium server)

This project provides example functional integration tests using Nightwatch and Selenium as well as unit tests using Karma, Mocha, and Chai. Karma tests will run in the headless PhantomJS browser. 

The Selenium web-driver should work with your local installation of Firefox by default. To test in additional browsers (Chrome, IE, Edge, Safari, etc), download the appropriate web-drivers or browser-extensions and and [configure Nightwatch accordingly](http://nightwatchjs.org/guide#selenium-settings).

## Set up

Clone or download and decompress this repository. Using your favorite command line tool, change to the project directory. Run ```npm install``` to install dependencies.

After running ```npm install``` the  “libs” Gulp task will run automatically and download the latest Selenium stand-alone server for running automated browser tests in Nightwatch. Alternately, [download the latest version of the Selenium stand-alone server here](http://selenium-release.storage.googleapis.com/index.html) (or whichever version you require) and save the Jar to the ```bin``` directory in the project. You may run ```gulp libs``` at any time to download a fresh copy.
	
## Getting started

The following tasks should be enough to get started with a test-driven JavaScript project. See ```gulpfile.js``` for additional tasks and details.

### Build and run the app

The default Gulp task ```gulp default``` or simply ```gulp``` will:

* Build the JavaScript application using Browserify
* Start a local development server for the project
* Open your default browser to the local server, loading the project
* Start a watcher which will re-build the project upon any file changes

### Run functional integration tests

The “integration” task ```gulp integration``` or ```gulp int``` will:

* Build the JavaScript application using Browserify
* Start the local test server
* Run all functional tests tagged with “integration” using Nightwatch
* Shut down Nightwatch and the local server upon completion or test failure

### Run smoke tests

The “smoke” task ```gulp smoke``` will:

* Build the JavaScript application using Browserify
* Start the local test server
* Run all functional tests using Nightwatch
* Shut down Nightwatch and the local server upon completion or test failure

Why two functional test suites? You may want to differentiate one-off edge case tests or strange bug-fix tests from your regular integration test suite. However, you may want to run these before a production build or deployment to ensure you don’t have a bug regression.

### Run unit tests

The "test" task ```gulp test``` will run all unit tests once and quit.

The “tdd” task ```gulp tdd``` will start a watcher to run unit tests continuously upon changes to tests or source files. Use this task as part of your TDD workflow.

### Etcetera

See ```gulpfile.js``` for tasks to do stand alone tests, builds, and the like.

## Notes

### Browserified, compressed JavaScript is added to .gitignore

Browserified and compressed JavaScript is saved in ```www/js/app.js```. This file is included in .gitignore so it will not be maintained in source control. This assumes that web assets will be built as part of your deployment pipeline. If you are deploying via SFTP or similar, remove this file from .gitignore.

### Tests all over the place

Karma is configured to run JavaScript unit tests in the ```src``` or ```test``` directory. Some developers / project prefer to have tests right next door to the file / module they describe. Others prefer tests live in their own directory. This project supports both.