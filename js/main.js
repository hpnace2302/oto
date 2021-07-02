const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// window.onscroll = function hiddenButtonScrollTop() {
//   let btnScrollTop = $('.scroll-top')
//   console.log(btnScrollTop)
//   btnScrollTop.style.display = 'none'
//   if (btnScrollTop.onscroll > 2000) {
//   } else {
//     btnScrollTop.style.display = 'hidden'
//   }
// }

// xử lý ẩn hiện button scroll-top

// $(".scroll-top").on('click',function(){

//   var scDiv = $("#home");
  
//   var top = scDiv.css('top');
  
//   top = parseInt(top);
  
//   scDiv.css('top',(top-5)+"px");
  
//   //To make it visually scrollable
  
  
//     scDiv.animate({
//       top: top
//     },500);
  
//   });

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = $(".header__mb-tl__icon");
  let y = $('.header__mb-tl__nav--list')
  console.log(y)
  if (y.className.indexOf("w3-show") == -1) {
      y.className += " w3-show";
  } else {
      y.className = y.className.replace(" w3-show", "");
  }
}

function toggleFunction2() {
  var x = $(".header__mb-tl__nav--item__name");
  let y = $('.header__mb-tl__nav--item__subnav')
  console.log(y)
  if (y.className.indexOf("w3-show") == -1) {
      y.className += " w3-show";
  } else {
      y.className = y.className.replace(" w3-show", "");
  }
}

// xử lý scroll tab control
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.querySelector(".nav");
    if (document.documentElement.scrollTop > 500) {
      navbar.classList.add('nav1')
    } else {
      navbar.classList.remove('nav1')
    }
}

// window.onscroll = function() {myFunction2()};
// function myFunction2() {
//     var navbar = document.querySelector(".nav");
//     if (document.documentElement.scrollTop < 400) {
//       navbar.classList.remove('nav1')
//     }
// }

// window.onscroll = function() {myFunction2()};
// function myFunction2() {
//     var navbar = document.getElementById("nav");
//     if (document.body.scrollTop < 1000 || document.documentElement.scrollTop < 600) {
        
//     } else {
//         navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
//     }
// }