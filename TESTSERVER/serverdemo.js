/**
 * Created by herczkumihalybalazs on 2016.07.03..
 */

var express = require('express');
var app = express();


// This responds a POST request for the /login
app.post('/login', function (req, res) {
    console.log("Got a POST request for the /login");
    // res.send('Hello POST');
    // res.send('succes');
    res.send('fail');
});


// This responds a POST request for the /registration.
app.post('/registration', function (req, res) {
    console.log("Got a POST request for/registration");
    // res.send('succes');
    res.send('fail');
});


// This responds a POST request for the /logout.
app.post('/logout', function (req, res) {
    console.log("Got a POST request for /logout");
    res.send('You are logged out');
});

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Server demo app listening at http://%s:%s", host, port)
});


