
$(document).ready(function(){
    $('.doc_main').slick({
      slidesToShow: 4,
      slideToScroll:1,
      infinity:true,
       autoplay:true,
       autoplaySpeed:2000,
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