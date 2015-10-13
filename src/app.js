var helloWorld = require("./hello-world");

window.addEventListener("load", function(){
	document.querySelector("button").addEventListener("click", function(e){
		helloWorld("#sample");
	});
});