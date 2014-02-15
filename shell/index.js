'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ShellGenerator = module.exports = function ShellGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
	this.componentName = arguments[0][0];
	this.tagName = arguments[0][1];

};

util.inherits(ShellGenerator, yeoman.generators.NamedBase);

ShellGenerator.prototype.files = function files() {
	this.template('shell.js',"public/js/react_components/"+this.componentName+".js")
};
