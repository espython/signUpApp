var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");



app.use('/public', express.static('./public'));

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb:url');
//Create a schema -this is like a blueprint .

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String

});

var usersData = mongoose.model('usersdata', userSchema);


app.get('/signup', function(req, res) {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/signup', urlencodedParser, function(req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    var saveUserData = usersData(req.body).save(function(err, data) {

        if (err) throw err;
    });
    console.log('Name: ' + username);
    console.log('Email: ' + email);
    console.log('Password: ' + password);

    // res.json(req.body);

});

app.listen(3000, function() {
    console.log('listening on port 3000!');
});