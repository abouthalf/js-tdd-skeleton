var helloWorld = require("./example");

window.addEventListener("load", function(){
	document.querySelector("button").addEventListener("click", function(e){
		helloWorld("#sample");
	});
});