var scrollCounter = 1
$(document).ready(function() {
  callAJAX(scrollCounter)
  $(window).scroll(function(event) {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
       callAJAX(scrollCounter)
     }
  });
});

function callAJAX(page) {
  scrollCounter += 1
  $.ajax({
    url: 'http://www.omdbapi.com/?s=tiger&y=&plot=short&r=json&page=' + page,
    type: 'GET',
    dataType: 'json',
    data: {param1: 'value1'}
  })
  .done(function(json) {
    for (var i = 0; i < json.totalResults; i++) {
      $(".container").append(
        '<section class="result"> <p>'
        + json["Search"][i]["Title"] + ' - ' + json["Search"][i]["Year"] +
        '</p> </section>')
      }
    })
    .fail(function() {
      console.log("error");
    })
  }
