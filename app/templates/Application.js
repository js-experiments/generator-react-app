/**
 * @jsx React.DOM
 */
define([
	'jquery'
	, 'underscore'
	, 'backbone'
	, 'react'
	, 'jsx!components/About'
	, 'showdown' // ==> globals

], function($, _, Backbone, React, AboutComponent){
	//"use strict";

	var Application = Backbone.Router.extend({ // application is a router

		routes : {
			"": "home",
			"help/:id" : "help",
			'*actions': 'defaultAction'
		},
		initialize : function() { //initialize models, collections and views ...
			console.log("=== Initialize application ===")

			React.renderComponent(
				<AboutComponent docLocation="js/docs/about_my_app.md" id="about_my_app"/>,
				document.querySelector('.about_my_app')
			);

			React.renderComponent(
				<AboutComponent docLocation="js/docs/about_how_to.md" id="about_how_to"/>,
				document.querySelector('.about_how_to')
			);

		},
		// when routes
		home : function(){
			console.log("=== home ===");
		},
		help : function(id){
			console.log("=== help ===", id);
		},
		defaultAction: function(action) {
			console.log("defaultAction", action)
		}
	});

	return Application;
});
