
var <%= name %>sRoutes = function(app, mongoose) {

	var <%= name %>Schema = mongoose.Schema({
		<%= schema %>
	});

	var <%= name %> = mongoose.model('<%= name %>', <%= name %>Schema)

	/* ...
	 $.ajax({
		 type: "POST",
		 url: "<%= url %>",
		 data: {<%= defaultValues %>},
		 dataType: "json",
		 success: function(<%= _.slugify(name) %>){ console.log(<%= _.slugify(name) %>) }
	 });
	 */
	app.post("/<%= url %>", function(req, res) {
		var <%= _.slugify(name) %> = new <%= name %>(req.body)
		<%= _.slugify(name) %>.save(function (err, <%= _.slugify(name) %>) {
			res.send(<%= _.slugify(name) %>);
		});
	});

	/*
	 $.get("<%= url %>", function(<%= _.slugify(name) %>s) { console.log(<%= _.slugify(name) %>s); })
	 */
	app.get("/<%= url %>", function(req, res) {

		<%= name %>.find(function (err, <%= _.slugify(name) %>s) {
			res.send(<%= _.slugify(name) %>s);
		})
	});

	/*
	 $.ajax({
		 type: "GET",
		 url: "<%= url %>/ff06fc5a-d779-4e8a-810c-cf1aeeffd5b8",
		 success: function(<%= _.slugify(name) %>){ console.log(<%= _.slugify(name) %>) }
	 });
	 */
	app.get("/<%= url %>/:id", function(req, res) { //try findById
		<%= name %>.find({_id:req.params.id}, function (err, <%= _.slugify(name) %>s) {
			res.send(<%= _.slugify(name) %>s[0]);
		})
	});

	/*
	 $.ajax({
		 type: "PUT",
		 url: "<%= url %>/ff06fc5a-d779-4e8a-810c-cf1aeeffd5b8",
		 data: {<%= defaultValues %>},
		 dataType: "json",
		 success: function(<%= _.slugify(name) %>){ console.log(<%= _.slugify(name) %>) }
		});
	 */
	app.put("/<%= url %>/:id", function(req, res) {
		<%= name %>.findOneAndUpdate({_id:req.params.id}, req.body, function (err, <%= _.slugify(name) %>) {
			res.send(<%= _.slugify(name) %>);
		});
	});

	/*
	 $.ajax({
		 type: "DELETE",
		 url: "<%= url %>/ff06fc5a-d779-4e8a-810c-cf1aeeffd5b8",
		 success: function(<%= _.slugify(name) %>){ console.log(<%= _.slugify(name) %>) }
	 });
	 */
	app.delete("/<%= url %>/:id", function(req, res) {
		<%= name %>.findOneAndRemove({_id:req.params.id}, function (err, <%= _.slugify(name) %>) {
			res.send(<%= _.slugify(name) %>);
		});
	});

}

module.exports = <%= name %>sRoutes;