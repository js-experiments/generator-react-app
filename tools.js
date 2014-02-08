
var tools ={
	scriptsList : function() {

		var fs = require('fs');
		// read all components files
		var files = fs.readdirSync('./public/js/components');
		console.log(files);
		var components = [];
		files.forEach(function(file) {
			if (file!=="all.components.js"){
				components.push("  'js/components/"+file+"'\n")
			}
		});

		var stream = fs.createWriteStream("./public/js/components/all.components.js");
		stream.once('open', function(fd) {
			stream.write("function getComponents(){ return [\n");
			stream.write(components.join(","));
			stream.write("];};\n");

			stream.write('\n')
			stream.write('getComponents().forEach(function(s){\n')
			stream.write('	var script = document.createElement("script");\n')
			stream.write('	script.src = s;\n')
			stream.write('	script.type = "text/jsx";\n')
			stream.write('	document.querySelector("head").appendChild(script);\n')
			stream.write('})\n')
			stream.write('\n')

			stream.end();
		});

		console.log("components updated ...")
	}
}

module.exports = tools;






