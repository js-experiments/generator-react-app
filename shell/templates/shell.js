/** @jsx React.DOM */

/*
	React.renderComponent(
		<<%= componentName %> id={something}/>,
		document.querySelector('.<%= _.slugify(componentName) %>')
	);
 */

var <%= componentName %> = React.createClass({

	getInitialState: function() {
		return {content:"..."};
	},

	componentWillMount: function() {},

	componentDidMount: function() {},

	render: function() {
		return (
			<<%= tagName %> id={this.props.id}>
				{this.state.content}
			</<%= tagName %>>
		);
	}
});

