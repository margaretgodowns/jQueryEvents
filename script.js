$(".squareOne").click(function(){
  $(this).css("background-color", "#f49ea7")
  $(this).css("border-radius", "100%")
  $(this).css("width", "100px")
  $(this).css("height", "100px")
  $(this).css("float", "right")
});

$(function(){
  $(".squareTwo").hide().fadeIn();
  $(".squareTwo").on('click', function(){
    $(this).fadeIn(25);
    $(this).css("background-color", "#ef5122");
  })
});

$(".squareThree").on("click", function(){
  $(this).slideUp(500);
});


$(".squareFour").on("click", function(){
  $(this).fadeOut(1000)
});

$(function(){
  $(".squareFive").on('click', function(){
    $(this).animate({
      opacity: 0.0,
      paddingLeft: '+=80'
    }, 500
    );
  });
});

$(".squareSix").on('click',function(){
  $(this).animate({
    height: '+=600'
  }, 200, function(){
    $(this).remove();
  });
});

$(".squareSeven").click(function(){
  $(this).css("height","600px")
  $(this).css("borderBottomWidth", "50px")
  $(this).css("borderTopWidth", "50px")
});

$("#square8").mouseover(function(event){
  $(this).addClass("jumble");
});

$("#square8").mouseout(function(event){
  $(this).removeClass("jumble");
});

$("#square9").dblclick(function(event){
  $(this).addClass("zoom");
});

// $("#square9").dblclick(function(event){
//   $(this).removeClass("zoom");
// });

$(".square10").mouseover(function(event){
  $(this).addClass("jumble");
  $(this).css("borderWidth", "35px")
});

$(".square10").mouseout(function(event){
  $(this).removeClass("jumble");
});

$(".square11").click(function(event){
  $(this).addClass("zoom");
  $(this).css("border-radius", "10%")
  $(this).css("margin-top","200px")
  $(this).css("background-color","#f49ea7")
});

// $(".square11").click(function(event){
//   $(this).removeClass("zoom");
// });
