const express = require('express');
var path    = require("path");
const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/WebDev.html'));
});
app.get('/postComment', function (req, res) {
    res.send('Comment added!');
});
app.get('/buyMug', function (req, res) {
    res.send('Congrats on your new purchase.');
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});