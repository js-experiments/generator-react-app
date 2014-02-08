/** @jsx React.DOM */
$(function() {
	React.renderComponent(
		<AboutComponent docLocation="js/docs/about_my_app.md" id="about_my_app"/>,
		document.querySelector('.about_my_app')
	);

	React.renderComponent(
		<AboutComponent docLocation="js/docs/about_how_to.md" id="about_how_to"/>,
		document.querySelector('.about_how_to')
	);
});
