(function ($) {
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

//-------- select dropdown-----
const selectedAll = document.querySelectorAll(".search_inner");

selectedAll.forEach((selected) => {
  const optionsContainer = selected.children[2];
  const optionsList = selected.querySelectorAll("div.search_inner li");

  selected.addEventListener("click", () => {
    let arrow = selected.children[1];

    if (selected.classList.contains("active")) {
      handleDropdown(selected, arrow, false);
    } else {
      let currentActive = document.querySelector(".search_inner.active");

      if (currentActive) {
        let anotherArrow = currentActive.children[1];
        handleDropdown(currentActive, anotherArrow, false);
      }

      handleDropdown(selected, arrow, true);
    }
  });

  // update the display of the dropdown
  for (let o of optionsList) {
    o.addEventListener("click", () => {
      selected.querySelector(".sBtn-text").innerHTML = o.innerHTML;
    });
  }
});

// check if anything else ofther than the dropdown is clicked
window.addEventListener("click", function (e) {
  if (e.target.closest(".search_inner") === null) {
    closeAllDropdowns();
  }
});

// close all the dropdowns
function closeAllDropdowns() {
  const selectedAll = document.querySelectorAll(".search_inner");
  selectedAll.forEach((selected) => {
    const optionsContainer = selected.children[2];
    let arrow = selected.children[1];

    handleDropdown(selected, arrow, false);
  });
}


// open all the dropdowns
function handleDropdown(dropdown, arrow, open) {
  if (open) {
    arrow.classList.add("rotated");
    dropdown.classList.add("active");
  } else {
    arrow.classList.remove("rotated");
    dropdown.classList.remove("active");
  }
}
//-------- dropdown end here

// --------Get the modal
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



// --------star ratings
 const stars = document.querySelectorAll(".stars i");

 // Loop through the "stars" NodeList
 stars.forEach((star, index1) => {
   // Add an event listener that runs a function when the "click" event is triggered
   star.addEventListener("click", () => {
     // Loop through the "stars" NodeList Again
     stars.forEach((star, index2) => {
       // Add the "active" class to the clicked star and any stars with a lower index
       // and remove the "active" class from any stars with a higher index
       index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
     });
   });
 });


//--------------- back to top button----
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
    if (scrolling > 15) {
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

$('.rating').starRating({
    // starIconEmpty:'far fa-star',
    // starIconFull:'fas fa-star',
    // starColorEmpty:'lightgray',
    // starColorFull:'#FFC107',
    // starsSize: 4,
    // stars: 5,
  });

  
})(jQuery);