"use strict";

describe("Example", function(){

	var sandbox;

	before(function(){
		// make clean up of spies, mocks, and stubs easier with a sandbox
		// @see http://sinonjs.org/docs/#sandbox
		sandbox = sinon.sandbox.create(null);
	});

	afterEach(function(){
		// restore after each test is run
		sandbox.restore();
	});

	it("should be ok", function(){
		expect(true).to.be.ok;
	});

});