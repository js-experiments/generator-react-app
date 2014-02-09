
var tools ={
	scriptsList : function() {

		var fs = require('fs');
		// read all components files
		var files = fs.readdirSync('./public/js/models');
		console.log(files);
		var components = [];
		files.forEach(function(file) {
			components.push("  'js/models/"+file+"'\n")
		});

		files = fs.readdirSync('./public/js/components');

		files.forEach(function(file) {
			components.push("  'js/components/"+file+"'\n")
		});

		var stream = fs.createWriteStream("./public/js/all.scripts.js");
		stream.once('open', function(fd) {
			stream.write("function getBBComponents(){ return [\n");
			stream.write(components.join(","));
			stream.write("];};\n");

			stream.write('\n')
			stream.write('getBBComponents().forEach(function(s){\n')
			stream.write('	var script = document.createElement("script");\n')
			stream.write('	script.src = s;\n')
			stream.write('	script.type = "text/jsx";\n')
			stream.write('	document.querySelector("head").appendChild(script);\n')
			stream.write('})\n')
			stream.write('\n')

			stream.end();
		});

		console.log("scripts list updated ...")
	}
}

module.exports = tools;





