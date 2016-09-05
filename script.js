$(document).ready(function() {
  $.ajax({
    url: 'http://www.omdbapi.com/?s=tiger&y=&plot=short&r=json&page=1',
    type: 'GET',
    dataType: 'json',
    data: {param1: 'value1'}
  })
  .done(function(json) {
    for (var i = 0; i < json.totalResults; i++) {
      $(".container").append('<p>' + json["Search"][i]["Title"] + '</p>')
    }
    console.log("success");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

});
