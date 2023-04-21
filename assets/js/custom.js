$(document).ready(function(){
    $("button").submit(function(){
      $("p").hide("slow", function(){
        alert("We have received your message. Thank you for reaching out to us");
      });
    });
  })