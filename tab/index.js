'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var TableGenerator = module.exports = function TableGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
	this.componentName = arguments[0][0];
	this.tagName = arguments[0][1];

	this.on('end', function () {
		require("../tools").scriptsList();
	});
};

util.inherits(TableGenerator, yeoman.generators.NamedBase);

TableGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	var prompts = [
		{name : "tabLabels", message : "tab labels (for UI) (home, news, ...)?"}
	];

	this.routes = [];

	this.prompt(prompts, function (props) {
		this.tabLabels = []
		props.tabLabels.split(",").forEach(function(label) {
			this.tabLabels.push(label.trim());
		}.bind(this))

		cb();

	}.bind(this));
};

TableGenerator.prototype.files = function files() {
	this.template('tab.js',"public/js/components/"+this.componentName+".js")
};
