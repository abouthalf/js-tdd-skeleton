module.exports = {
	tags: ["integration"],

	beforeEach: function(client) {
		// The "client" object represents the web browser.
		// The "init" method on the client object loads the url configured as "launch_url" in nightwatch.json
		// Do this before each test to start a new browser session
		client.init();
	},

	after: function(client) {
		// After all tests are complete, shut down the browser.
		client.end();
	},


	"A visitor to the site sees a page title": function(client) {
		client
			.getTitle(function(result){
			this.assert.equal(result, "TDD Skeleton");
		});
	},
	"A visitor to the site sees a call to action": function(client) {
		client
			.assert.elementPresent("body > h1")
			.assert.containsText("body > h1", "Replace this with your application");
	},

	"Clicking the button adds text to the page": function(client) {
		client
			.getValue("#sample", function(result){
				var v = result.value;
				client
					.click("button[type=button]")
					.pause(100)
					.assert.elementPresent("div")
					.assert.containsText("div", v);
			});
	},

	"Entering text in the field, then clicking teh button adds the entered text to the page": function(client) {
		var textToSet = "my new field text";
		client
			.setValue("#sample", textToSet, function(){
				client
					.click("button[type=button]")
					.pause(100)
					.assert.elementPresent("div")
					.assert.containsText("div",textToSet);
			});
	}
};