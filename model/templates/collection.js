/*--- <%= name %>s Collection ---*/
define([
	'backbone',
	'models/<%= name %>'
], function(Backbone, <%= name %>){

	var <%= name %>s = Backbone.Collection.extend({
		model : <%= name %>,
		url : "<%= url %>"
	});

	return <%= name %>s;
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
