var scrollCounter = 1
var query = 'tiger'
$(document).ready(function() {
  callAJAX(scrollCounter, query)
  $(".title-search").keyup(function(){
    query = $(this).val()
    $(".container").empty()
    callAJAX(scrollCounter,$(this).val())
  })

  $(window).scroll(function(event) {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
       callAJAX(scrollCounter,query)
     }
  });
});

function callAJAX(page,query) {
  scrollCounter += 1
  $.ajax({
    url: 'http://www.omdbapi.com/?s=' + query + '&y=&plot=short&r=json&page=' + page,
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
