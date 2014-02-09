var <%= modelName %>sCollection = Backbone.Collection.extend({
	url : "<%= url %>",
	model: <%= modelName %>Model
});
