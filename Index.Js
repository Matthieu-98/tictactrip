var utils = require('./fonction');
var express = require('express');
var app = express();
app.use(express.json())    // <==== parse request body as JSON

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});
app.post('/api/justify', function (req, res) {
    console.log("request : ");
    console.log(req.body.text); 
    justifiedText = utils.transformTextToTextjustify(req.body.text);
    res.send(justifiedText);
});

console.log("démarage de l'api rest ");
app.listen(3000);

