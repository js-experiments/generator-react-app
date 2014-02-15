/** @jsx React.DOM */

/*
	var <%= componentName %> = require('../react_components/<%= componentName %>'); 
	React.renderComponent(
		<<%= componentName %>/>,
		document.querySelector('<%= componentName %>')
	);
*/

var React = require('react')
	, <%= modelName %>Model = require("../modules/models/<%= modelName %>Model");

var <%= componentName %> = React.createClass({

	getInitialState: function() {
		return {data : [], message : ""};
	},

	render: function() {
		return (
			<form role="form" className="form-horizontal" onSubmit={this.handleSubmit}>
				<% _.each(fields, function(field) { %><div className="form-group">
						<input className="form-control" type="text" placeholder="<%= field %>" ref="<%= field %>"/>
				</div>
				<% }); %>
				<div className="form-group">
					<input className="btn btn-primary" type="submit" value="Add <%= modelName %>" />
				</div>
				<div className="form-group"><strong>{this.state.message}</strong></div>
			</form>
		);
	},

	componentDidMount: function() {},
	componentWillMount: function() {},
	handleSubmit : function() {
		<% _.each(fields, function(field) { %>var <%= field %> = this.refs.<%= field %>.getDOMNode().value.trim();
		<% }); %>
		<% _.each(fields, function(field) { %>if (!<%= field %>) {return false;}
		<% }); %>
		var data = {};
		<% _.each(fields, function(field) { %>data.<%= field %> = <%= field %>;
		<% }); %>

		var <%= _.slugify(modelName) %>= new <%= modelName %>Model(data);

		<%= _.slugify(modelName) %>.save()
			.done(function(data) {
				this.setState({
					message : <%= _.slugify(modelName) %>.get("_id") + " added!"
				});
				<% _.each(fields, function(field) { %>this.refs.<%= field %>.getDOMNode().value = '';
				<% }); %>
				this.refs.<%= fields[0] %>.getDOMNode().focus();
			}.bind(this))
			.fail(function(err) {
				this.setState({
					message  : err.responseText + " " + err.statusText
				});
			}.bind(this));

		return false;
	}

});

module.exports = <%= componentName %>;
