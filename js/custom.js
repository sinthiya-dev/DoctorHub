new VenoBox({
    selector: '.my-video',
});
 // service slider
//  $(document).ready(function(){
//   $('.doc_appoint').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows:true,
//   });
//  });

$(document).ready(function(){
  $('.doc_main').slick({
    slidesToShow: 4,
    slideToScroll:1,
    infinity:true,
    // autoplay:true,
    // autoplaySpeed:2000,
    dots:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
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