/** @jsx React.DOM */
define(["react","jquery", "models/<%= name %>", "models/<%= name %>s"], function (React, $, <%= name %>, <%= name %>s) {
	var <%= name %>Form = React.createClass({

		getInitialState: function() {
			return {data : [], message : ""};
		},
		componentDidMount: function() {},
		componentWillMount: function() {},
		handleSubmit : function() {
			// create a new model : <%= name %>
			<% _.each(fields, function(field) { %>var <%= field %> = this.refs.<%= field %>.getDOMNode().value.trim();
			<% }); %>
			<% _.each(fields, function(field) { %>if (!<%= field %>) {return false;}
			<% }); %>
			this.setState({
				message : "Please wait ..."
			});

			var tmp<%= name %> = new <%= name %>();

			<% _.each(fields, function(field) { %>tmp<%= name %>.set({<%= field %> : <%= field %>});
			<% }); %>
			tmp<%= name %>.save({},{
				success: function(data) {
					this.setState({
						message : data.id + " added!"
					});
					<% _.each(fields, function(field) { %>this.refs.<%= field %>.getDOMNode().value = '';
					<% }); %>
					this.refs.<%= fields[0] %>.getDOMNode().focus();

				}.bind(this),
				error : function(err) {
					this.setState({
						message  : err.responseText + " " + err.statusText
					});
				}
			});

			return false;
		},

		render: function() {
			return (
				<div>
					<h2><%= name %> Form</h2>
					<form onSubmit={this.handleSubmit}>
						<% _.each(fields, function(field) { %><input type="text" placeholder="<%= field %>" ref="<%= field %>"/>
						<% }); %>
						<input type="submit" value="Add <%= name %>" />
						<br></br>
						<strong>{this.state.message}</strong>
					</form>
				</div>
			);
		}
	});
	return <%= name %>Form;
});
/* How to use it

 'jsx!components/<%= name %>Form'

 React.renderComponent(
		<<%= name %>Form/>,
    document.querySelector('.<%= _.slugify(name) %>-form')
 );
 */
