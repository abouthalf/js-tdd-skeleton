/**
 * Extract value from "el" and print to the page
 * @param {String} el css querySelector
 */
module.exports = function helloWorld(el) {
	/* @type {HTMLElement} */
	var element = document.querySelector(el),
		text,
		div;
	text = (element.value) ? element.value : element.textContent;
	div = document.createElement("div"),
		div.appendChild(document.createTextNode(text));
	document.body.appendChild(div);
};