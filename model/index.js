'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
	//var cb = this.async();
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('Create Model ' + this.name + ' and Collection ' + this.name+"s");

	this.on('end', function () {

		var fs = require('fs');

		// read all routes files for update all.routes.js
		var files = fs.readdirSync('./routes');
		var routes = [];
		files.filter(function(file) { return file.substr(-10) == '.routes.js'; })
			.forEach(function(file) {
				if (file!=="all.routes.js"){
					console.log("==>", file, 'require("./routes/'+file.split(".js")[0]+'")(app, mongoose);')
					routes.push('require("./routes/'+file.split(".js")[0]+'")(app, mongoose);')
				}
			});
		console.log("Updating routes ...")
		console.log(routes)

		var stream = fs.createWriteStream("all.routes.js");
		stream.once('open', function(fd) {
			stream.write("var AllRoutes = function(app, mongoose) {\n");
			routes.forEach(function(line){
				stream.write("  "+line+"\n");
			});
			stream.write("}\n");
			stream.write("module.exports = AllRoutes;\n");
			stream.end();
		});

		console.log("Routes updated ...")

	});

};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	var prompts = [
		{name : "defaultValues", message : 'default values of BB model (ie: title:"my life",author:"john doe")?'},
		{name : "url", message : "url?"},
		{name : "schema", message : "mongoose schema (ie: name: String, remark: String)?"},
		{name : "fields", message : "fields (for UI) (title, author)?"}
	];

	this.routes = [];

	this.prompt(prompts, function (props) {
		this.defaultValues = props.defaultValues;
		this.url = props.url;
		this.schema = props.schema;

		this.fields = []
		props.fields.split(",").forEach(function(item) {
			this.fields.push(item.trim());
		}.bind(this))

		cb();

	}.bind(this));
};

ModelGenerator.prototype.files = function files() {

	this.mkdir("routes");

	this.template('routes.js', "routes/"+this.name+"s.routes.js");

	this.template('model.js', "public/js/models/"+this.name+".js");
	this.template('collection.js', "public/js/models/"+this.name+"s.js");
	this.template('form.js',"public/js/components/"+this.name+"Form.js")
	this.template('list.js',"public/js/components/"+this.name+"sList.js")

};
