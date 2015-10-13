"use strict";

var helloWorld = require("./index");

describe("HelloWorld", function(){
	var sandbox,
		html;

	before(function(){
		// make clean up of spies, mocks, and stubs easier with a sandbox
		// @see http://sinonjs.org/docs/#sandbox
		sandbox = sinon.sandbox.create(null);

		// use the html2js pre-processor to load HTML snippits for tests
		html = window.__html__["test/resources/hello-world.html"];
		document.body.innerHTML = html;
	});

	afterEach(function(){
		// restore after each test is run
		sandbox.restore();
	});

	it("should be ok", function(){
		expect(true).to.be.ok;
	});

	it("should append the text from a form field", function(){
		helloWorld("#sample");

	});
});