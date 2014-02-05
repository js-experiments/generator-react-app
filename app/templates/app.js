var args = process.argv.splice(2);
var express = require('express');

var app = express()

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded());


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/<%= dataBaseName %>');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {

	/*=== insert routes here ===*/
	require("./all.routes")(app, mongoose);

});

app.listen(args[0] || 3000);
console.log("Listening")
