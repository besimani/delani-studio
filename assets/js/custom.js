$(document).ready(function(){
    $("button").submit(function(){
      $("p").show("slow", function(){
        alert("We have received your message. Thank you for reaching out to us");
        console.log(submit)
      });
    });
  })