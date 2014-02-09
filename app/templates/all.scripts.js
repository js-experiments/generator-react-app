function getScripts(){ return [
	'js/components/About.js'
];};

getScripts().forEach(function(s){
	var script = document.createElement('script');
	script.src = s;
	script.type = "text/jsx";
	document.querySelector('head').appendChild(script);
})