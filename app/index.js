'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ReactAppGenerator = module.exports = function ReactAppGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    //this.installDependencies({ skipInstall: options['skip-install'] });
	  this.installDependencies();
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ReactAppGenerator, yeoman.generators.Base);

ReactAppGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  // console.log(this.yeoman);
	console.log(" _____             _       _____          ");
	console.log("| __  |___ ___ ___| |_ ___|  _  |___ ___  ");
	console.log("|    -| -_| .'|  _|  _|___|     | . | . | ");
	console.log("|__|__|___|__,|___|_|     |__|__|  _|  _| ");
	console.log("                                |_| |_|   ");
	console.log("Hi! This is a React-Express-Mongoose Generator :) Enjoy!");

	var prompts = [
		{name : "applicationName", message : "Application name?"},
		{name : "dataBaseName", message : "DataBase name?"}
	];

	this.prompt(prompts, function (props) {
		this.applicationName = props.applicationName;
		this.dataBaseName = props.dataBaseName;

		cb();
	}.bind(this));
};

ReactAppGenerator.prototype.app = function app() {

	/*=== front side structure ===*/
	this.mkdir("public");
	this.mkdir("public/js");

	this.mkdir("public/js/docs");

	this.mkdir("public/js/modules");
	this.mkdir("public/js/modules/models");
	this.mkdir("public/js/react_components");

	//this.mkdir("public/js/shims");

	/*=== "static" assets ===*/
	this.template('index.html', "public/index.html");
	this.template('main.js', "public/js/modules/main.js");
	this.template('About.js', "public/js/react_components/About.js");

	/*=== back side structure ===*/

	this.mkdir("db");

	/*=== "dynamic" assets ===*/

	this.template("db.js", "db/db.js");

	this.template('about_my_app.md', "public/js/docs/about_my_app.md");
	this.template('about_how_to.md', "public/js/docs/about_how_to.md");


	this.copy("Gruntfile.js", "Gruntfile.js");

	this.template('_bower.json', "bower.json");
	this.template('bowerrc', ".bowerrc");

	this.template('_package.json', "package.json");
	this.copy('gitignore', ".gitignore");

	this.template('README.md', 'README.md');

	//express part
	this.template('app.js', "app.js");
	this.copy('all.routes.js', "all.routes.js");

};

ReactAppGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
