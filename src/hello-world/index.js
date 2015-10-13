/**
 * Extract value from "el" and print to the page
 * @param {String} el css querySelector
 */
module.exports = function helloWorld(el) {
	/* @type {HTMLElement} */
	var element = document.querySelector(el),
		text;
	text = (element.value) ? element.value : element.textContent;
	document
		.body
		.appendChild(document.createElement("div")
			.appendChild(document.createTextNode(text))
	);
};