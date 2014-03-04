/** @jsx React.DOM */
var React   = require('react');
var Backbone = require("backbone");
Backbone.$ = window.$ = require("jquery")

var About = require('../react_components/About');

Backbone.history.start();

React.renderComponent(
<About docLocation="js/docs/about_my_app.md"/>,
	document.querySelector('.about_my_app')
);

React.renderComponent(
<About docLocation="js/docs/about_how_to.md"/>,
	document.querySelector('.about_how_to')
);

