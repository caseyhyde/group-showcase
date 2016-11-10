var teamArray = [];
var likes = {};

function appendToDom() {
  for (var i = 0; i < teamArray.length; i++) {
    console.log("hello");
    $('#team').append('<div class="student" id ="' + teamArray[i].name + '"><h2>'
    + teamArray[i].name + '</h2><p>' + teamArray[i].bio +
    '</p><img src="' + teamArray[i].image + '"/><button>LIKE</button><p id="likes"></p></div>');

    $('#team').children().last().data('name', teamArray[i].name);
    appendLikes();
  }
}

function appendLikes () {
  $('#Casey').children().last().text(likes.Casey);
  $('#Hien').children().last().text(likes.Hien);
  $('#Phil').children().last().text(likes.Phil);
  }


$(document).ready(function() {
  console.log("Hello world");

  $.ajax({
    type: 'GET',
    url: '/bios',
    success: function(array) {
      teamArray = array;
      console.log(teamArray);
      appendToDom();
    }
  });

$('#team').on('click', 'button', function() {
  //console.log($(this));
  var personClicked = $(this).parent().data('name');
  sendLikes(personClicked);


});

function sendLikes(personClicked){
  $.ajax({
    type: 'POST',
    url: '/likes',
    data: { name: personClicked},
    success: function (data) {
    getLikes();
    }
  });
}

function getLikes() {
$.ajax ({
  type: 'GET',
  url: '/likes',
  success: function (data) {
    likes = data;
    appendLikes();
    }
  });
}



});
