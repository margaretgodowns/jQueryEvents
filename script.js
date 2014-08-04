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

$(function(){
  $(".squareThree").slideUp();
  $(".squareThree").on('click', function(){
    $(this).slideUp(25);
  })
});

$(function(){
  $(".squareFour").fadeOut();
  $(".squareFour").on('click', function(){
    $(this).fadeOut(1000);
  })
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
