/** @jsx React.DOM */

/*
	var <%= componentName %> = require('../react_components/<%= componentName %>'); 
	React.renderComponent(
		<<%= componentName %> pollInterval={500}/>,
		document.querySelector('<%= componentName %>')
	);
*/

var React = require('react')
	, Backbone = require("backbone")
	, <%= modelName %>Model = require("../modules/models/<%= modelName %>Model")
	, <%= modelName %>sCollection = require("../modules/models/<%= modelName %>sCollection");

var <%= componentName %> = React.createClass({

	getInitialState: function() {
		return {data : [], message : ""};
	},

	render: function() {

		var <%= _.slugify(modelName) %>sNodes = this.state.data.map(function(<%= _.slugify(modelName) %>){
			var deleteLink = "#delete_<%= _.slugify(modelName) %>/" + <%= _.slugify(modelName) %>._id;

			return (
				<li>
					<% _.each(fields, function(field) { %>{<%= _.slugify(modelName) %>.<%= field %>}{" "}
					<% }); %><a href={deleteLink}>delete</a>
				</li>
				
			);
		});

		return (
			<div>
				<strong>{this.state.message}</strong>
				<ul>
					{<%= _.slugify(modelName) %>sNodes}
				</ul>
			</div>
		);
	},

	get<%= modelName %>s : function() {

		var <%= _.slugify(modelName) %>s = new <%= modelName %>sCollection();

		<%= _.slugify(modelName) %>s.fetch()
			.done(function(data){
				this.setState({data : <%= _.slugify(modelName) %>s.toJSON(), message : Date()});
			}.bind(this))
			.fail(function(err){
				this.setState({
					message  : err.responseText + " " + err.statusText
				});
			}.bind(this))
	},
	componentWillMount: function() {
		this.get<%= modelName %>s();
		setInterval(this.get<%= modelName %>s, this.props.pollInterval);
	},
	componentDidMount: function() {
		var Router = Backbone.Router.extend({
			routes : {
				"delete_<%= _.slugify(modelName) %>/:id" : "<%= _.slugify(modelName) %>"
			},
			initialize : function() {
				console.log("Initialize router of <%= componentName %> component");
			},
			<%= _.slugify(modelName) %> : function(id){
				console.log("=== delete <%= _.slugify(modelName) %> ===", id);
				new <%= modelName %>Model({_id:id}).destroy();
				this.navigate('/');
			}
		});
		this.router = new Router()
	}	

});

module.exports = <%= componentName %>;

