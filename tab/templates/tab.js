/** @jsx React.DOM */

/*
	var <%= componentName %> = require('../react_components/<%= componentName %>'); 
	React.renderComponent(
		<<%= componentName %> id={"42"}/>,
		document.querySelector('<%= componentName %>')
	);
*/
var React = require('react')
	, $ = window.jQuery = require("jquery")
	, bootstrap = require("../bower_components/bootstrap/dist/js/bootstrap.min"); 


var <%= componentName %> = React.createClass({

	getInitialState: function() {},

	render: function() {

		return (
			<div id={this.props.id}>
				<ul className="nav nav-tabs">
					<% _.each(tabLabels, function(label) { %><li><a href="#<%= _.slugify(label) %>" data-toggle="tab"><%= label %></a></li>
					<% }); %>
				</ul>

				<div className="tab-content">
					<% _.each(tabLabels, function(label) { %><div className="tab-pane" id="<%= _.slugify(label) %>">
						<div className="container">content of <%= label %></div>
					</div>
					<% }); %>
				</div>
			</div>
		);
	},
	componentDidMount: function() {
		$('#'+this.props.id+' ul a').click(function (e) {
			e.preventDefault()
			$(this).tab('show')
		})
		$('#'+this.props.id+' ul a:first').tab('show')
	},
	componentWillMount: function() {}
});

module.exports = <%= componentName %>;
