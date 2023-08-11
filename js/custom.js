new VenoBox({
    selector: '.my-video',
});
$(document).ready(function(){
  $(".search_bar").click(function(){
      $(".search_txt").fadeIn()
      1000;
  });
  $(".search_close_btn").click(function(){
      $(".search_txt").fadeOut()
      1000;
 });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 // service slider
// $(document).ready(function(){
//  $('.doc_appoint').slick({
//        slidesToShow: 1,
//        slidesToScroll: 1,
//        arrows:true,
//  });
// });

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
      $(".menu_bg").addClass("bg");
  } else {     
      $(".menu_bg").removeClass("bg"); 
  }
 // if(scrolling> 30){
 //     $(".back_2_top").fadeIn();
 // } else{
 //     $(".back_2_top").fadeOut(500);
 // }
});