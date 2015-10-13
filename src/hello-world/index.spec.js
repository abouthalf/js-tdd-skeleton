"use strict";

var helloWorld = require("./index");

/**
 * A Browserified test example
 */
describe("HelloWorld", function(){
	var sandbox,
		html;

	before(function(){
		// make clean up of spies, mocks, and stubs easier with a sandbox
		// @see http://sinonjs.org/docs/#sandbox
		sandbox = sinon.sandbox.create(null);

		// use the html2js pre-processor to load HTML snippits for tests
		html = window.__html__["test/resources/hello-world.html"];
	});

	beforeEach(function(){
		document.body.innerHTML = html;
	});

	afterEach(function(){
		// restore after each test is run
		sandbox.restore();
		document.body.innerHTML = "";
	});

	it("should append the text from a form field", function(){
		var output;
		// run against the form field
		helloWorld("#sample");
		output = document.querySelector("div");
		expect(output).to.be.ok;
		expect(output.textContent).to.eql("Form Field");
	});

	it("should append the text from within an element", function(){
		var output;
		// run against the paragraph
		helloWorld("p");
		output = document.querySelector("div");
		expect(output).to.be.ok;
		expect(output.textContent).to.eql("standard element");
	});
});