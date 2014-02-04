/** @jsx React.DOM */
define(["react","jquery"], function (React, $) {

	var AboutComponent = React.createClass({

		componentWillMount: function() {

		},

		componentDidMount: function() {
			var converter = new Showdown.converter();
				$.get(this.props.docLocation, function(data) {
					$("#"+this.props.id).html(converter.makeHtml(data))
				}.bind(this));
		},

		render: function() {
			return (
				<div id={this.props.id}>
					{this.content}
				</div>
			);
		}
	});
	return AboutComponent;

});
