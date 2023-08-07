new VenoBox({
    selector: '.my-video',
});


$(document).ready(function(){
  $('.port_main').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slideToScroll:1,
    centerPadding:"0px",
    nextArrow:".next",
    prevArrow:".prev",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
})

$(".back_2_top").click(function(){
  $('html, body').animate(
      {
          scrollTop: 0,
      },
      1500
  );
});

$(window).scroll(function (){
  var scrolling = $(this).scrollTop()  
    if (scrolling > 30) {
      $(".nav").addClass("bg");
  } else {     
      $(".nav").removeClass("bg"); 
  }
  if(scrolling> 30){
      $(".back_2_top").fadeIn();
  } else{
      $(".back_2_top").fadeOut(500);
  }
});