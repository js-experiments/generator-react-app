'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
	//var cb = this.async();
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

	//'{"name":"bob","sam":"toto"}'

  console.log('Create Model ' + this.name + ' and Collection ' + this.name+"s");

	//console.log(JSON.parse(this.name));

};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	var prompts = [
		{name : "defaultValues", message : 'default values of BB model (ie: title:"my life",author:"john doe")?'},
		{name : "url", message : "url?"},
		{name : "schema", message : "mongoose schema (ie: name: String, remark: String)?"}
	];

	this.routes = [];

	this.prompt(prompts, function (props) {
		this.defaultValues = props.defaultValues;
		this.url = props.url;
		this.schema = props.schema;

		cb();

	}.bind(this));
};

ModelGenerator.prototype.files = function files() {

	//console.log(JSON.parse("{"+this.defaultValues+"}"))

	var fs = require('fs');

	var files = fs.readdirSync('./');
	files.filter(function(file) { return file.substr(-10) == '.routes.js'; })
		.forEach(function(file) {

			if (file!=="all.routes.js"){
				console.log("==>", file, 'require("./'+file.split(".js")[0]+'")(app, mongoose);')
				this.routes.push('require("./'+file.split(".js")[0]+'")(app, mongoose);')
			}
		}.bind(this));

	/*
	fs.readdir('./', function(err, files) {

		files.filter(function(file) { return file.substr(-10) == '.routes.js'; })
			.forEach(function(file) {

				if (file!=="all.routes.js"){
					console.log("==>", file, 'require("./'+file.split(".js")[0]+'")(app, mongoose);')
					this.routes.push('require("./'+file.split(".js")[0]+'")(app, mongoose);')
				}
			}.bind(this));
	}.bind(this));
	*/

	console.log(this.routes)

	this.template('routes.js', this.name+"s.routes.js");

	this.template('all.routes.js', "all.routes.js");

  this.template('model.js', "public/js/models/"+this.name+".js");
	this.template('collection.js', "public/js/models/"+this.name+"s.js");
};
