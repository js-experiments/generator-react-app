'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var BbmcGenerator = module.exports = function BbmcGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
	this.modelName = arguments[0][0];

};

util.inherits(BbmcGenerator, yeoman.generators.NamedBase);

BbmcGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	var prompts = [
		{name : "modelName", message : "model name (ie: Book)", default : this.modelName},
		{name : "defaults", message : "defaults (ie: name: 'John Doe', remark: 'N/A')?"},
		{name : "url", message : "url?", default : this.modelName.toLowerCase()+"s"}
	];

	this.prompt(prompts, function (props) {
		this.modelName = props.modelName;
		this.defaults = props.defaults;

		this.url = props.url;

		cb();

	}.bind(this));
};


BbmcGenerator.prototype.files = function files() {
	this.template('model.js',"public/js/modules/models/"+this.modelName+"Model.js")
	this.template('collection.js',"public/js/modules/models/"+this.modelName+"sCollection.js")
};
