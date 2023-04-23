$(document).ready(function(){
  $("button").click(function(){
    $("p").toggle(1000, function(){
      alert("The toggle() method is finished!");
      console.log(toggle)
    });
  });
});


$(document).ready(function(){
    $("button").submit(function(){
      $("p").hide("slow", function(){
        alert("We have received your message. Thank you for reaching out to us");
      });
    });
  })