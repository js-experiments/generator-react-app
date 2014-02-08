/*=== Main Application ===*/
var args = process.argv.splice(2);
var express = require('express');

var app = express()

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded());

require("./db/db").once('open', function callback () {
	/*=== insert routes here ===*/
	require("./all.routes")(app);
});

app.listen(args[0] || 3000);
console.log("Listening on 3000")
