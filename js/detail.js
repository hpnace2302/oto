const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// xử lý ẩn hiện nav mobile
function toggleFunction() {
  let x = $(".header__mb-tl__icon");
  let y = $('.header__mb-tl__nav--list')
  // console.log(y)
  if (y.className.indexOf("show") == -1) {
      y.className += " show";
  } else {
      y.className = y.className.replace(" show","");
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


// xử lý chuyển tab active
const tabs = $$(".content__slide--nav__item");

// const tabActive = $(".content__slide--nav__item.active");

tabs.forEach((tab) => {

  tab.onclick = function () {
    $(".content__slide--nav__item.active").classList.remove("active");
    this.classList.add("active");
  };
});

// xủ lý chuyển tab slide
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

// xử lý slide 360

const colorBtn = $$('.content__slide--fell360__color--item')
const colorPick = $('.content__slide--fell360__color--pick__img')
const oto = $$('.content__slide--fell360__img')
console.log(oto)

let cat = './assets/img-detail/ex_Sepia_topaz.png'
let trang = './assets/img-detail/ex_Noble_White.png'
let red = './assets/img-detail/ex_Ruby_wine.png'
let bac = './assets/img-detail/ex_Sleek_Silver.png'
let den = './assets/img-detail/ex_Night_Sky.png'
let otocat = './assets/img-detail/img-360/es_00.png'
let ototrang = './assets/img-detail/ototrang/es_00.png'
let otored = './assets/img-detail/es_0 (2).png'
let otobac = './assets/img-detail/es_0 (3).png'
let otoden = './assets/img-detail/es_0 (4).png'

colorBtn[0].onclick = function () {
  colorPick.src = cat
  // oto.src = otocat
  oto[0].style.display = 'block'
  oto[1].style.display = 'none'
  // oto[2].style.display = 'none'
  // oto[3].style.display = 'none'
  // oto[4].style.display = 'none'
}
colorBtn[1].onclick = function () {
  colorPick.src = trang
  // oto.src = ototrang
  oto[0].style.display = 'none'
  oto[1].style.display = 'block'
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

// xử lý ẩn hiện subnav mobile

const btns = $$('.header__mb-tl__nav--list > li')
// console.log(btns)
const showMenu = () => {
  btns.forEach((btn) => {
    btn.onclick = () => {
      const classBtn = btn.className
      // console.log(classBtn)
      if (classBtn.indexOf('active') === -1) {
        // alert('k active')
        // console.log(btn)
        const subnavs = $$('.header__mb-tl__nav--item__subnav')
        subnavs[0].style.display = 'none'
        subnavs[1].style.display = 'none'
        subnavs[2].style.display = 'none'
        subnavs[3].style.display = 'none'
        subnavs[4].style.display = 'none'
        btn.children[1].style.display = 'block'
        btn.classList.add('active')
        // btn.classList.remove('active')
      } else {
        btn.children[1].style.display = 'none'
        btn.classList.remove('active')
      }
    }
  })
}

showMenu()

// xử lý bật tắt chat 
const chatHeader = $('.chat__header')
const chatBody = $('.chat__body')
chatHeader.onclick = () => {
  if (chatBody.style.display == 'none') {
    $('.chat__body').style.display = 'block'
  } else {
    $('.chat__body').style.display = 'none'
  }
}