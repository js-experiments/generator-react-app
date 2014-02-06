/*--- <%= name %> Model ---*/
define([
	'backbone'
], function(Backbone){

	var <%= name %> = Backbone.Model.extend({
		idAttribute: "_id",
		defaults : function (){
			return {
				<%= defaultValues %>
			}
		},
		urlRoot : "<%= url %>"
	});

	return <%= name %>;
});
/* How to use it
 define([
	 'jquery',
	 'underscore',
	 'backbone',
	 'models/<%= name %>',
	 'models/<%= name %>s'
 ], function($, _, Backbone, <%= name %>, <%= name %>s) {

	 var Application = {};

	 return Application;
 });
 */



