/** @jsx React.DOM */

/*
 React.renderComponent(
  <<%= componentName %> id={something}/>,
  document.querySelector('.<%= _.slugify(componentName) %>')
 );
 */

var <%= componentName %> = React.createClass({

	getInitialState: function() {
		return {data : [], message : ""};
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

		var tmp<%= modelName %> = new <%= modelName %>Model(data);

		tmp<%= modelName %>.save({},{
			success: function(<%= _.slugify(modelName) %>){
				this.setState({
					message : <%= _.slugify(modelName) %>.get("_id")  + " added!"
				});

				<% _.each(fields, function(field) { %>this.refs.<%= field %>.getDOMNode().value = '';
					<% }); %>
				this.refs.<%= fields[0] %>.getDOMNode().focus();

			}.bind(this),
			error : function(err) {
				this.setState({
					message  : err.responseText + " " + err.statusText
				});
			}.bind(this)
		});

		return false;
	},

	render: function() {
		return (
			<<%= tagName %> id={this.props.id}>
				<h2><%= componentName %></h2>
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
			</<%= tagName %>>
		);
	}
});

