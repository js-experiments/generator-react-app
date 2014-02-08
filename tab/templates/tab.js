/** @jsx React.DOM */

/*
	React.renderComponent(
		<<%= componentName %> id={something}/>,
		document.querySelector('.<%= _.slugify(componentName) %>')
	);
 */

var <%= componentName %> = React.createClass({

	getInitialState: function() {

	},
	componentDidMount: function() {
		$('#'+this.props.id+' ul a').click(function (e) {
			e.preventDefault()
			$(this).tab('show')
		})
		$('#'+this.props.id+' ul a:first').tab('show')
	},

	componentWillMount: function() {},

	render: function() {

		return (
			<<%= tagName %> id={this.props.id}>

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
			</<%= tagName %>>
		);
	}
});
