module.exports = {
	tags: ["example"],

	/**
	 * This test is an example from the Nightwatch documentation.
	 *
	 * It's a good overview of how a basic functional test works.
	 * @param client
	 */
	"Example test": function(client) {
		client
			.url('http://www.google.com')
			.waitForElementVisible('body', 1000)
			.setValue('input[type=text]', 'nightwatch')
			.waitForElementVisible('button[name=btnG]', 1000)
			.click('button[name=btnG]')
			.pause(1000)
			.assert.containsText('#main', 'Night Watch')
			.end();
	}
};