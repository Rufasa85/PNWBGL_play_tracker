var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var moongoose = require('mongoose');

var ejsLayouts = require('express-ejs-layouts');
app.use(ejsLayouts);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static(__dirname + '/static/'));
moongoose.connect('mongodb://localhost/PNWBGL_play_tacker');

app.get('/', function(req, res) {
    res.send('APIed')
});


app.listen(3000);
