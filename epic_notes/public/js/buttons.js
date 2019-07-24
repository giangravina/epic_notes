

$("#save").click(function (){
      
      // $.get($("#exampleFormControlTextarea1").val(), function(req, res, next){
      //   console.log($("#exampleFormControlTextarea1").val());
      //   //alert($("#exampleFormControlTextarea1").val());
      // });
      // $.post($("#exampleFormControlTextarea1").val(), data, function(req, res, next){
      //     var data = $.get($("#exampleFormControlTextarea1").val());
      //     console.log(data);
      // });
    //   $.get("/notes", function(req, res, next){
    //     var r = $("#exampleFormControlTextarea1").val();
    //     console.log(r);
    //   })
    //     //console.log($("#exampleFormControlTextarea1").val());--working
    // });
    var data = {
                  title: $("#title").val(),
                  note: $("#exampleFormControlTextarea1").val()
                };
     $.post("/notes", data, function(){
          console.log(data);
      });
   });

$("#edit").click(function(){
    $("#save").hide();
});

$("#del").click(function(){
  function deleteNote(e) {
  let eventNote = e.target.parentNode;
  eventNote.parentNode.removeChild(console.log());
}
});

$("#addNew").click(function(){

});