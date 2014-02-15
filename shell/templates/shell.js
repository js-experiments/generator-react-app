/** @jsx React.DOM */

/*
	var <%= componentName %> = require('../react_components/<%= componentName %>'); 
	React.renderComponent(
		<<%= componentName %>/>,
		document.querySelector('<%= componentName %>')
	);
*/

var React = require('react')

var <%= componentName %> = React.createClass({

	getInitialState: function() {
		return {content:"..."};
	},

	render: function() {
		return (
			<<%= tagName %>>
				{this.state.content}
			</<%= tagName %>>
		);
	},
	componentWillMount: function() {},
	componentDidMount: function() {}

});

module.exports = <%= componentName %>;
