'use strict';
var util = require('util');

var yeoman = require('yeoman-generator');

var MgroutesGenerator = module.exports = function MgroutesGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);

	this.on('end', function () {

		var fs = require('fs');
		// read all routes files for update all.routes.js
		var files = fs.readdirSync('./routes');
		var routes = [];
		files.filter(function(file) { return file.substr(-10) == '.routes.js'; })
			.forEach(function(file) {
				if (file!=="all.routes.js"){
					routes.push('require("./routes/'+file.split(".js")[0]+'")(app);')
				}
			});

		var stream = fs.createWriteStream("all.routes.js");
		stream.once('open', function(fd) {
			stream.write("var AllRoutes = function(app) {\n");
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

util.inherits(MgroutesGenerator, yeoman.generators.NamedBase);

MgroutesGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	var prompts = [
		{name : "schema", message : "mongoose schema (ie: name: String, remark: String)?"},
		{name : "url", message : "url?", default : this.name.toLowerCase()+"s"}

	];

	this.routes = [];

	this.prompt(prompts, function (props) {
		this.schema = props.schema;
		this.url = props.url;
		cb();
	}.bind(this));
};

MgroutesGenerator.prototype.files = function files() {
	this.mkdir("models");
	this.mkdir("routes");
	this.mkdir("controllers");
	this.template("model.js", "models/"+this.name+".js")
	this.template('routes.js', "routes/"+this.name+"s.routes.js");
	this.template('controller.js', "controllers/"+this.name+"sCtrl.js");
};
