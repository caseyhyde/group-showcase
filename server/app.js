var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var likes = {
  Casey: 0,
  Hien: 0,
  Phil: 0
};

var teamArray = [
  {
    name: "Casey",
    bio: "I enjoy long walks on the beach with Phil (and Hien on occasion).",
    image: "./assets/images/casey.img",

  },
  {
    name: "Phil",
    bio: "I enjoy long walks on the beach with Casey (and Hien on occasion).",
    image: "./assets/images/phil.img",


  },
  {
    name: "Hien",
    bio: "I enjoy long walks on the beach by myself (and on occasion with Phil or Casey).",
    image: "./assets/images/hien.img",

  }
];
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);

app.get('/likes', function (req, res) {
  res.send(likes);
})

app.get('/bios', function(req, res) {
  //console.log("HELLOHELLO");
  res.send(teamArray);
});

app.post('/likes', function(req,res) {
  console.log(req.body.name);
  addLike(req);
  res.send('HORSE');
})

app.get('/*', function (req, res) {
  var file = req.params[0] || '/views/index.html';
  //console.log("file " + file);

  res.sendFile(path.join(__dirname, './public', file));
  //console.log("dirname" + __dirname);
});


app.listen(app.get('port'), function() {
  console.log("WORKING!");
});

function addLike(req) {
var name = req.body.name;
switch (name) {
  case "Phil":
    likes.Phil++;
    break;
  case "Casey":
    likes.Casey++;
    break;
  case "Hien":
    likes.Hien++;
    break;
  default:

  }
  console.log(likes);
}



  //
  // console.log("req.body.name " + req.body.name);
  // if(req.body.name === "Phil"){
  //   likes.Phil++;
  // }
//   console.log(likes.Phil);
// }
/*
 Serve this file from an Express route that responds to a GET request for the url /.
*/
