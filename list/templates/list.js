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

	getAll<%= modelName %>s : function() {

		$.ajax({
			type: "GET",
			url: "<%= url %>",
			dataType: "json",
			success: function(<%= _.slugify(modelName) %>s){
				this.setState({data : <%= _.slugify(modelName) %>s, message : Date()});
			}.bind(this),
			error : function(err) {
				this.setState({
					message  : err.responseText + " " + err.statusText
				});
			}.bind(this)

		});

	},
	componentDidMount: function() {},

	componentWillMount: function() {
		this.getAll<%= modelName %>s();
		setInterval(this.getAll<%= modelName %>s, this.props.pollInterval);
	},
	render: function() {

		var items = this.state.data.map(function(item){
			return (
				<li>
					<% _.each(fields, function(field) { %>{item.<%= field %>}{" "}
					<% }); %>
				</li>
			);
		});

		return (
			<<%= tagName %> id={this.props.id}>
				<h2><%= componentName %></h2>
				<ul>
					{items}
				</ul>
			</<%= tagName %>>
		);
	}
});

