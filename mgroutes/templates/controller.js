/*=== <%= name %> Controller ===*/

var <%= name %> = require("../models/<%= name %>")();

var <%= name %>sCtrl = {
	create : function(req, res) {
		var <%= _.slugify(name) %> = new <%= name %>(req.body)
			<%= _.slugify(name) %>.save(function (err, <%= _.slugify(name) %>) {
			res.send(<%= _.slugify(name) %>);
		});
	},
	fetchAll : function(req, res) {
		<%= name %>.find(function (err, <%= _.slugify(name) %>s) {
			res.send(<%= _.slugify(name) %>s);
		});
	},
	fetch : function(req, res) {
		<%= name %>.find({_id:req.params.id}, function (err, <%= _.slugify(name) %>s) {
			res.send(<%= _.slugify(name) %>s[0]);
		});
	},
	update : function(req, res) {
		<%= name %>.findOneAndUpdate({_id:req.params.id}, req.body, function (err, <%= _.slugify(name) %>) {
			res.send(<%= _.slugify(name) %>);
		});
	},
	delete : function(req, res) {
		<%= name %>.findOneAndRemove({_id:req.params.id}, function (err, <%= _.slugify(name) %>) {
			res.send(<%= _.slugify(name) %>);
		});
	}
}

module.exports = <%= name %>sCtrl;
