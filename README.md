# TDD Skeleton project for JavaScript web-applications

This is a skeleton project which includes:

* [Gulp](http://gulpjs.com) for running build and test tasks
* [Browserify](http://browserify.org) for building JavaScript and managing dependencies
* [Karma](https://karma-runner.github.io/) for running unit tests
* [Mocha](http://mochajs.org) test framework for unit tests
* [Chai](https://duckduckgo.com/?q=chai+js&t=osx) assertion library 
* [SinonJS](http://sinonjs.org) for mocking JavaScript objects and browser features
* [PhantomJS](http://phantomjs.org) browser for running JavaScript tests quietly and heedlessly from the command line.
* [Nightwatch](http://nightwatchjs.org) for automated browser testing

The project is to provides a directory structure and build configuration to support test driven development for a browser based JavaScript application.

This project can be cloned or downloaded then altered to suit your needs, or simply be used as a one-stop reference implementation.

## Requirements and assumptions

* Basic familiarity with the command line
* NodeJS v0.12.7 or later is installed
* Gulp.js installed globally
* Basic familiarity with the Gulp.js build system
* Basic familiarity with Git version control (just enough to get a copy of this project onto your computer or development environment)
* Familiarity with Browserify and CommonJS style modular JavaScript development and dependency management.
* Firefox browser installed 

This project provides example functional integration tests using Nightwatch and Selenium as well as unit tests using Karma, Mocha, and Chai. Karma tests will run in the headless PhantomJS browser. 

The Selenium web-driver should work with your local installation of Firefox by default. To test in additional browsers (Chrome, IE, Edge, Safari, etc), download the appropriate web-drivers or browser-extensions and and [configure Nightwatch accordingly](http://nightwatchjs.org/guide#selenium-settings).

## Set up

Clone or download and decompress this repository. Using your favorite command line tool, change to the project directory. Run ```npm install``` to install dependencies.

The “libs” Gulp task will download the latest Selenium stand-alone server for running automated browser tests in Nightwatch. Alternately, [download the latest version of the Selenium stand-alone server here](http://selenium-release.storage.googleapis.com/index.html) (or whichever version you require) and save the Jar to the ```bin``` directory in the project.

	gulp libs
	
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
* Start the local development server
* Run all functional tests tagged with “integration” using Nightwatch
* Shut down Nightwatch and the local server upon completion or test failure

### Run unit tests

The "test" task ```gulp test``` will run all unit tests once.

The “dev” task ```gulp dev``` will start a watcher to run unit tests upon any JavaScript changes.

### Etcetera

See ```gulpfile.js``` for tasks to do stand alone tests, builds, and the like.
