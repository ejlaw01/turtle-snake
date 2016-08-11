$(document).ready(function(){

  $("form").change(function(event) {

    var animal = $("#animal").val();

    if (animal === "1") {
      $("#turtle").show();
      $("#snake").hide();
      $("#insect").hide();
    } else if (animal === "2") {
      $("#snake").show();
      $("#turtle").hide();
      $("#insect").hide();
    } else {
      $("#insect").show();
      $("#turtle").hide();
      $("#snake").hide();
    }

    event.preventDefault();

  });
});
