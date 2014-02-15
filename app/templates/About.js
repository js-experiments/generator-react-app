/** @jsx React.DOM */
var React = require('react')
	, $ = window.jQuery = require("jquery")
	, markdown = require( "markdown" ).markdown;

var About = React.createClass({

	componentDidMount: function() {
		$.get(this.props.docLocation, function(data) {
			this.refs.content.getDOMNode().innerHTML = markdown.toHTML(data)
		}.bind(this));
	},

	render: function() {
		return (
			<div ref="content">
			</div>
		);
	}
});

module.exports = About
