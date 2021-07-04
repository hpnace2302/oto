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

// $('.scroll-top').on('click',function(){

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
  let x = $(".header__mb-tl__icon");
  let y = $('.header__mb-tl__nav--list')
  console.log(y)
  if (y.className.indexOf("w3-show") == -1) {
      y.className += " w3-show";
  } else {
      y.className = y.className.replace(" w3-show", "");
  }
}

function toggleFunction2() {
  let x = $(".header__mb-tl__nav--item__name");
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
    let navbar = document.querySelector(".nav");
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

// xử lý chuyển tab active
const tabs = $$(".content__slide--nav__item");

// const tabActive = $(".content__slide--nav__item.active");

tabs.forEach((tab) => {

  tab.onclick = function () {
    $(".content__slide--nav__item.active").classList.remove("active");
    this.classList.add("active");
  };
});

const tabsSlidePictureControl = $$('.content__slide--picture__control--item')
// const tabActiveSlidePictureControl = $('.content__slide--picture__control--item.active')

tabsSlidePictureControl[0].onclick = function () {
  $('.content__slide--picture__control--item.active').classList.remove('active')
  tabsSlidePictureControl[0].classList.add('active')
  $('.content__slide--picture__overview--list').style.display = 'flex'
  $('.content__slide--picture__furniture--list').style.display = 'none'
  $('.content__slide--picture__exterior--list').style.display = 'none'
}
tabsSlidePictureControl[1].onclick = function () {
  $('.content__slide--picture__control--item.active').classList.remove('active')
  tabsSlidePictureControl[1].classList.add('active')
  $('.content__slide--picture__overview--list').style.display = 'none'
  $('.content__slide--picture__furniture--list').style.display = 'flex'
  $('.content__slide--picture__exterior--list').style.display = 'none'
}
tabsSlidePictureControl[2].onclick = function () {
  $('.content__slide--picture__control--item.active').classList.remove('active')
  tabsSlidePictureControl[2].classList.add('active')
  $('.content__slide--picture__overview--list').style.display = 'none'
  $('.content__slide--picture__furniture--list').style.display = 'none'
  $('.content__slide--picture__exterior--list').style.display = 'flex'
}


// const tabsControl = $$('.content__slide--control__item')

// tabsControl.onclick = () => {
//   let scDiv = $("#home");
  
//   let top = scDiv.css('top');
  
//   top = parseInt(top);
  
//   scDiv.css('top',(top-5)+"px");
  
//   //To make it visually scrollable
  
  
//   scDiv.animate({
//     top: top
//   },500);
// }

// window.scroll(function(){
//   if(window.scrollTop() >= 1000) {
//     const scrollTopBtn = $('scroll-top')
//     scrollTopBtn.show();
//   } else {
//     scrollTopBtn.hide();
//   }
// });

// // function page_scroll2top(){
// //   $('html,body').animate({
// //     scrollTop: 0
// //     }, 'fast');
// // }

const btnControl = $$('.content__slide--control__item--img')

let gtactive = './assets/img-detail/affix-cover-active.png'
let cnactive = './assets/img-detail/affix-360-active.png'
let htactive = './assets/img-detail/affix-gallery-active.png'
let dgactive = './assets/img-detail/affix-review-active.png'
let tsactive = './assets/img-detail/affix-spec-active.png'
let gt = './assets/img-detail/affix-cover.png'
let cn = './assets/img-detail/affix-360.png'
let ht = './assets/img-detail/affix-gallery.png'
let dg = './assets/img-detail/affix-review.png'
let ts = './assets/img-detail/affix-spec.png'

btnControl[0].onclick = () => {
  btnControl[0].src = gtactive
  btnControl[1].src = cn
  btnControl[2].src = ht
  btnControl[3].src = dg
  btnControl[4].src = ts
  $('.content__slide--detail').style.display = 'flex'
  $('.content__slide--fell360').style.display = 'none'
  $('.content__slide--picture').style.display = 'none'
  $('.content__slide--evaluate').style.display = 'none'
  $('.content__slide--parameter').style.display = 'none'
}
btnControl[1].onclick = () => {
  btnControl[0].src = gt
  btnControl[1].src = cnactive
  btnControl[2].src = ht
  btnControl[3].src = dg
  btnControl[4].src = ts
  $('.content__slide--detail').style.display = 'none'
  $('.content__slide--fell360').style.display = 'block'
  $('.content__slide--picture').style.display = 'none'
  $('.content__slide--evaluate').style.display = 'none'
  $('.content__slide--parameter').style.display = 'none'
}
btnControl[2].onclick = () => {
  btnControl[0].src = gt
  btnControl[1].src = cn
  btnControl[2].src = htactive
  btnControl[3].src = dg
  btnControl[4].src = ts
  $('.content__slide--detail').style.display = 'none'
  $('.content__slide--fell360').style.display = 'none'
  $('.content__slide--picture').style.display = 'block'
  $('.content__slide--evaluate').style.display = 'none'
  $('.content__slide--parameter').style.display = 'none'
}
btnControl[3].onclick = () => {
  btnControl[0].src = gt
  btnControl[1].src = cn
  btnControl[2].src = ht
  btnControl[3].src = dgactive
  btnControl[4].src = ts
  $('.content__slide--detail').style.display = 'none'
  $('.content__slide--fell360').style.display = 'none'
  $('.content__slide--picture').style.display = 'none'
  $('.content__slide--evaluate').style.display = 'flex'
  $('.content__slide--parameter').style.display = 'none'
}
btnControl[4].onclick = () => {
  btnControl[0].src = gt
  btnControl[1].src = cn
  btnControl[2].src = ht
  btnControl[3].src = dg
  btnControl[4].src = tsactive
  $('.content__slide--detail').style.display = 'none'
  $('.content__slide--fell360').style.display = 'none'
  $('.content__slide--picture').style.display = 'none'
  $('.content__slide--evaluate').style.display = 'none'
  $('.content__slide--parameter').style.display = 'flex'
}


const colorBtn = $$('.content__slide--fell360__color--item')
const colorPick = $('.content__slide--fell360__color--pick__img')
const oto = $('.content__slide--fell360__img')

let cat = './assets/img-detail/ex_Sepia_topaz.png'
let trang = './assets/img-detail/ex_Noble_White.png'
let red = './assets/img-detail/ex_Ruby_wine.png'
let bac = './assets/img-detail/ex_Sleek_Silver.png'
let den = './assets/img-detail/ex_Night_Sky.png'
let otocat = './assets/img-detail/es_0.png'
let ototrang = './assets/img-detail/es_0 (1).png'
let otored = './assets/img-detail/es_0 (2).png'
let otobac = './assets/img-detail/es_0 (3).png'
let otoden = './assets/img-detail/es_0 (4).png'

colorBtn[0].onclick = function () {
  colorPick.src = cat
  oto.src = otocat
}
colorBtn[1].onclick = function () {
  colorPick.src = trang
  oto.src = ototrang
}
colorBtn[2].onclick = function () {
  colorPick.src = red
  oto.src = otored
}
colorBtn[3].onclick = function () {
  colorPick.src = bac
  oto.src = otobac
}
colorBtn[4].onclick = function () {
  colorPick.src = den
  oto.src = otoden
}
