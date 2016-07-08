var express = require('express');
var fs = require('fs');
var app = express();
var path = __dirname + '/public/';
var bodyParser = require('body-parser')

var helpers = require('./server/helper.js');
var wiki = require('./server/wikiSummary.js');

// SET UP
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req,res,next) {
  console.log('/' + req.method + ' from ' + req.url);
  next();
});

// INITIAL ENDPOINT ROUTING

// INDEX.HTML - Served when user hits server
app.get('/', function(req, res) {
  res.sendFile(path + 'index.html');
});

// app.get('api/getCategories', function(req, res, next) {
//   res.send({categories: ['gifts', 'activities', 'trips', 'food']})
// });


// getIdea - responds to user clicking "GO button" from UI
app.post('/api/getIdea', function(req, res, next) {
  helpers.getIdeaList(function(data) {
    helpers.generateRandomIdea(data, req.body.category, function(result) {
      res.send(result);
    })
  })
});

// app.post('/api/getIdea', function(req, res, next) {
//   res.send(helpers.generateRandomIdea(req.ideaList, req.body.category));
// });




app.listen(3000, function() {
  console.log('App listening on port 3000!');
});
