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
  console.log(this.yeoman);

	var prompts = [{
		name : "applicationName",
		message : "Please : Application name?"
	}];

	this.prompt(prompts, function (props) {
		this.applicationName = props.applicationName;

		cb();
	}.bind(this));
};

ReactAppGenerator.prototype.app = function app() {
	this.mkdir("public");
	this.mkdir("public/js");
	this.mkdir("public/js/application");
	this.mkdir("public/js/components");
	this.mkdir("public/js/docs");


	this.template('index.html', "public/index.html");
	this.template('main.js', "public/js/main.js");
	this.template('Application.js', "public/js/application/Application.js");

	this.template('About.js', "public/js/components/About.js");
	this.template('about_my_app.md', "public/js/docs/about_my_app.md");
	this.template('about_how_to.md', "public/js/docs/about_how_to.md");

	this.template('_bower.json', "bower.json");
	this.template('bowerrc', ".bowerrc");

	this.template('_package.json', "package.json");
	this.copy('gitignore', ".gitignore");

	//express part
	this.template('app.js', "app.js");


};

ReactAppGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
