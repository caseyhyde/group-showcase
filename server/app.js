var express = require('express');
var app = express();
var path = require('path');

var teamArray = ["Phil", "Hien", "Casey"];


app.set('port', process.env.PORT || 3000);


app.get('/bios', function(req, res) {
  console.log("HELLOHELLO");
  console.log(teamArray);
});

app.get('/*', function (req, res) {
  var file = req.params[0] || '/views/index.html';
  console.log("file " + file);

  res.sendFile(path.join(__dirname, './public', file));
  console.log("dirname" + __dirname);
});


app.listen(app.get('port'), function() {
  console.log("WORKING!");
});
/*
 Serve this file from an Express route that responds to a GET request for the url /.
*/
