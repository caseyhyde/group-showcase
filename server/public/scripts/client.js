var teamArray = [];

function appendToDom() {
  for (var i = 0; i < teamArray.length; i++) {
    console.log("hello");
    $('#team').append('<div id ="' + teamArray[i].name + '"></div>');
  }
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

});
