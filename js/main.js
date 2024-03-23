$(document).ready(function(event){ 
    // jQuery code 
    $("span").css("color", "red");
    $("#you").prop("disabled", true);
    $("#submit").click(function(){
        alert("You have submitted your final answer.");
        $("fieldset").remove();
        $("footer").addClass("center-screen");
      });
  });