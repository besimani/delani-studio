$(document).ready(()=>{
  $("#design, #development, #product management").click(()=>{
    console.log("click");
    $("#design, #development, #product management").toggle(()=>{
      console.log("toggle");
      alert("The toggle() display paragraph!");
    });
  });
});


$(document).ready(()=>{
    $("#form").submit(()=>{
      console.log("form submitted")
      $("p").hide("slow", ()=>{
        alert("We have received your message. Thank you for reaching out to us");
      });
    });
  })