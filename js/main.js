$(document).ready(function(event){ 
    // jQuery code 
    $("#you").prop("disabled", true);
    $("#submit").click(function(){
        alert("You have submitted your final answer.");
        // $("fieldset").fadeOut("slow", function(event) {
        //     $(this).remove();
        // });
        $("fieldset").addClass("animate__hinge");
        $("fieldset").delay(1500).fadeOut();
        $("footer").addClass("center-screen");
        $("span").css("color", "red");
      });
  });
  