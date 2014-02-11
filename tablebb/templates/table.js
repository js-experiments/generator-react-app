/** @jsx React.DOM */

/*
 React.renderComponent(
  <<%= componentName %> pollInterval={500}/>,
  document.querySelector('.<%= _.slugify(componentName) %>')
 );
 */

var <%= componentName %> = React.createClass({

	getInitialState: function() {
		return {data : [], message : ""};
	},

	getAll<%= modelName %>s : function() {

		this.<%= _.slugify(modelName) %>sCollection.fetch({
			success: function(<%= _.slugify(modelName) %>s){
				this.setState({data : <%= _.slugify(modelName) %>s.toJSON(), message : Date()});
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

		this.<%= _.slugify(modelName) %>sCollection = new <%= modelName %>sCollection();

		this.getAll<%= modelName %>s();
		setInterval(this.getAll<%= modelName %>s, this.props.pollInterval);
	},


	render: function() {

		var rows = this.state.data.map(function(row){
			return (
				<tr>
					<% _.each(fields, function(field) { %><td>{row.<%= field %>}</td>
					<% }); %>
				</tr>

			);
		});

		return (
			<<%= tagName %> className="table-responsive" id={this.props.id}>
				<h2><%= componentName %></h2>

				<table className="table table-striped table-bordered table-hover" >
					<thead>
						<tr>
							<% _.each(fields, function(field) { %><th><%= field %></th><% }); %>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</<%= tagName %>>
		);
	}
});

