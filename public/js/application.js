$(document).ready(function() {
  $("#ajax_interception").submit(function(event) { //add ajax interceptor as class in form. Upon event of 'submit' start this behavior (find something 'listener')
      event.preventDefault(); //first prevent default
      var url = $(this).attr("action"); //then grab action attr within same html location (grab action attribute)
      // console.log(this);
      // console.log(url); //'/roll'
      $.post(url, function(response) { //use that attribute to replace old action with new
        console.log(response); //returns the partial - img tag (the image)
      $("#die").html(response); //html replaces everything inside of div as opposed to append which adds things to the end (where to put the image)
    });
    });

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

});
