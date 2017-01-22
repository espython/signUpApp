var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");



app.use('/public', express.static('./public'));

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//routing
app.get('/signup', function(req, res) {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/signup', urlencodedParser, function(req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    console.log('Name: ' + username);
    console.log('Email: ' + email);
    console.log('Password: ' + password);

    res.json(req.body);

});

app.listen(3000, function() {
    console.log('listening on port 3000!');
});