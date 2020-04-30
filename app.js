$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "http://quotes.rest/qod.json",
  }).then(function (response) {
    console.log(response.contents.quotes[0].quote);
  });

  $.ajax({
    type: "GET",
    url: "https://icanhazdadjoke.com/",
    dataType: "json",
  }).then(function (response) {
    console.log(response.joke);
    $("body").prepend(`<p>${response.joke}</p>`);
  });
});




// "http://quotes.rest/qod.json"