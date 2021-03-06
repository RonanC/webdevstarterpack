var express = require("express");
var app = express();

// set the port of the application
// process.env.PORT lets the port be set by heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res){
  // ejs renders automatically, looks in the views folder
  res.render('index');
});

app.listen(port, function(){
  console.log('Our app is running on port: '+ port);
});

// live reload
// livereload = require('livereload');
// server = livereload.createServer();
// server.watch(__dirname + "/*/*/*.css");
