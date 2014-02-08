function getComponents(){ return [
	'js/components/About.js'
];};

getComponents().forEach(function(s){
	var script = document.createElement('script');
	script.src = s;
	script.type = "text/jsx";
	document.querySelector('head').appendChild(script);
})