var express = require('express');
var app = express();
var path = require('path');

var teamArray = [
  {
    name: "Casey",
    bio: "I enjoy long walks on the beach with Phil (and Hien on occasion).",
    image: "./public/assests/images/casey.img"
  },
  {
    name: "Phil",
    bio: "I enjoy long walks on the beach with Casey (and Hien on occasion).",
    image: "./public/assests/images/phil.img"
  },
  {
    name: "Hien",
    bio: "I enjoy long walks on the beach by myself (and on occasion with Phil or Casey).",
    image: "./public/assets/images/hien.img"
  }
];

app.set('port', process.env.PORT || 3000);

app.get('/bios', function(req, res) {
  console.log("HELLOHELLO");
  res.send(teamArray);
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
