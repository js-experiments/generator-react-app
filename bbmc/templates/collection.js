var Backbone = require("backbone");
var <%= modelName %>Model = require("./<%= modelName %>Model");

var <%= modelName %>sCollection = Backbone.Collection.extend({
	url : "<%= url %>",
	model: <%= modelName %>Model
});

module.exports = <%= modelName %>sCollection;

