var utils = require('./fonction');
var express = require('express');
var app = express();
app.use(express.json())    // <==== parse request body as JSON
var randtoken = require('rand-token');
var tokens = { };
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('exercice');
});
app.post('/api/justify', function (req, res) {
    console.log("request : ");
    console.log(req.body.text); 
    justifiedText = utils.transformTextToTextjustify(req.body.text);
    res.send(justifiedText);
});

app.post('/api/token', function (req, res) {
    console.log("request : ");
    console.log(req.body.email);
    
    var token = randtoken.generate(64);
    tokens[token] = req.body.email;
    res.send(token);
});

console.log("démarage de l'api rest ");
const port = process.env.PORT || 3000;
app.listen(port);

