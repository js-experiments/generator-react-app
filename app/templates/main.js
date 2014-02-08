requirejs.config({
	baseUrl : "js/",
	paths   : {
		"domReady"      : "bower_components/domready/ready.min",
		"jquery"        : "bower_components/jquery/jquery.min",
		"bootstrap"     : "bower_components/bootstrap/dist/js/bootstrap.min",
		"text"          : "bower_components/text/text",
		"showdown"      : "bower_components/showdown/compressed/showdown",
		"jsx"           : "bower_components/require-jsx/jsx",
		"JSXTransformer": "bower_components/react/JSXTransformer",
		"react"         : "bower_components/react/react.min"
	},
	shim: {
		JSXTransformer:{
			exports: "JSXTransformer"
		},
		"bootstrap": {
			deps: ["jquery"]
		},
		"showdown": {
			"exports": "Showdown"   //attaches "Showdown" to the window object
		}
	}
});

require([
	'domReady',
	'jsx!application/Application'
], function (domReady, Application) {

	domReady(function () {
		console.log("DOM is ready!");
		//$('body').css('visibility', 'visible');
		window.App = new Application();
	});

});


