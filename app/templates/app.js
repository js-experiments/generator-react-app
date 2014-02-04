/**
 * Created by k33g_org on 01/02/14.
 */
var express = require('express');

var app = express()

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded());

app.listen(3000)
console.log("Listening on port 3000")