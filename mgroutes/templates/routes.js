/*=== <%= name %> CRUD Routes ===*/
var <%= name %>sCtrl = require("../controllers/<%= name %>sCtrl");

var <%= name %>sRoutes = function(app) {

	app.post("/<%= url %>", function(req, res) {
		<%= name %>sCtrl.create(req, res);
	});

	app.get("/<%= url %>", function(req, res) {
		<%= name %>sCtrl.fetchAll(req, res);
	});

	app.get("/<%= url %>/:id", function(req, res) { //try findById
		<%= name %>sCtrl.fetch(req, res);
	});

	app.put("/<%= url %>/:id", function(req, res) {
		<%= name %>sCtrl.update(req, res);
	});

	app.delete("/<%= url %>/:id", function(req, res) {
		<%= name %>sCtrl.delete(req, res);
	});

}

module.exports = <%= name %>sRoutes;