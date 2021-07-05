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

// xử lý chuyển tab active
const tabs = $$(".content__slide--nav__item");

// const tabActive = $(".content__slide--nav__item.active");

tabs.forEach((tab) => {

  tab.onclick = function () {
    $(".content__slide--nav__item.active").classList.remove("active");
    this.classList.add("active");
  };
});

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
