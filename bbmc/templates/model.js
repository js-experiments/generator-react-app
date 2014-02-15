var Backbone = require("backbone");

var <%= modelName %>Model = Backbone.Model.extend({
	defaults : function (){
		return {
			<%= defaults %>
		}
	},
	urlRoot : "<%= url %>",
	idAttribute: "_id"
});

module.exports = <%= modelName %>Model;