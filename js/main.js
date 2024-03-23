$(document).ready(function(event){ 
    // jQuery code 
    $("#you").prop("disabled", true);
    $("#submit").click(function(){
        alert("You have submitted your final answer.");
        $("fieldset").fadeOut("slow", function(event) {
            $(this).remove();
        });
        $("footer").addClass("center-screen");
        $("span").css("color", "red");
      });
  });