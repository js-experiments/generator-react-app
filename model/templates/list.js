/** @jsx React.DOM */
define(["react","jquery", "models/<%= name %>", "models/<%= name %>s"], function (React, $, <%= name %>, <%= name %>s) {
	var <%= name %>sList = React.createClass({

		getInitialState: function() {
			return {data : [], message : "..."};
		},
		getAll<%= name %>s : function() {

			var <%= _.slugify(name) %>sCollection = new <%= name %>s();

			<%= _.slugify(name) %>sCollection.fetch({
				success : function(data) {
					this.setState({data : data.toJSON(), message : Date()});
				}.bind(this),
				error : function(err) {
					this.setState({
						message  : err.responseText + " " + err.statusText
					});
				}
			});

		},
		componentDidMount: function() {},
		componentWillMount: function() {
			this.getAll<%= name %>s();
			setInterval(this.getAll<%= name %>s, this.props.pollInterval);
		},
		render: function() {

			var <%= _.slugify(name) %>Item = this.state.data.map(function(<%= _.slugify(name) %>){
				return (
					<li>
						{<%= _.slugify(name) %>.id} {" "} <strong>{<%= _.slugify(name) %>.<%= fields[0] %>}</strong>
					</li>);
			});

			return (
				<div><h2><%= name %>s List</h2>
					<strong>{this.state.message}</strong>
					<ul>
						{<%= _.slugify(name) %>Item}
					</ul>
				</div>
			);
		}
	});
	return <%= name %>sList;
});

/* How to use it

 'jsx!components/<%= name %>sList'

 React.renderComponent(
  <<%= name %>sList pollInterval={500}/>,
  document.querySelector('.<%= _.slugify(name) %>s-list')
 );
 */