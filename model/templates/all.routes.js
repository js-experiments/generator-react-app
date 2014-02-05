
var AllRoutes = function(app, mongoose) {

	<% _.each(routes, function(route) { %> <%= route %>
	<% }); %>

}

module.exports = AllRoutes;
