requirejs.config({
	baseUrl : "js/",
	paths   : {
		"domReady"      : "bower_components/domready/ready.min",
		"jquery"        : "bower_components/jquery/jquery.min",
		"underscore"    : "bower_components/underscore-amd/underscore-min", /*This is amd version of underscore */
		"backbone"      : "bower_components/backbone-amd/backbone-min",   /*This is amd version of backbone   */
		"text"          : "bower_components/text/text",
		"showdown"      : "bower_components/showdown/compressed/showdown",
		"jsx"           : "bower_components/require-jsx/jsx",
		"JSXTransformer": "bower_components/react/JSXTransformer",
		"react"         : "bower_components/react/react.min"
	},
	shim: {
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
	'jsx!application/Application',
	'backbone'
], function (domReady, Application, Backbone) {

	domReady(function () {
		console.log("DOM is ready!");
		//$('body').css('visibility', 'visible');
		window.App = new Application();
		Backbone.history.start();
	});

});


