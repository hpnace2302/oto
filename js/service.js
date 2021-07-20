// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

const tabsService = $$('.content__header--item__box')

tabsService[0].onclick = function () {
  $('.content__header--item__box.active').classList.remove('active')
  tabsService[0].classList.add('active')
  $('.content__care').style.display = 'block'
  $('.content__guarantee').style.display = 'none'
  $('.content__maintenance').style.display = 'none'
  $('.content__accessories').style.display = 'none'
}
tabsService[1].onclick = function () {
  $('.content__header--item__box.active').classList.remove('active')
  tabsService[1].classList.add('active')
  $('.content__care').style.display = 'none'
  $('.content__guarantee').style.display = 'block'
  $('.content__maintenance').style.display = 'none'
  $('.content__accessories').style.display = 'none'
}
tabsService[2].onclick = function () {
  $('.content__header--item__box.active').classList.remove('active')
  tabsService[2].classList.add('active')
  $('.content__care').style.display = 'none'
  $('.content__guarantee').style.display = 'none'
  $('.content__maintenance').style.display = 'block'
  $('.content__accessories').style.display = 'none'
}
tabsService[3].onclick = function () {
  $('.content__header--item__box.active').classList.remove('active')
  tabsService[3].classList.add('active')
  $('.content__care').style.display = 'none'
  $('.content__guarantee').style.display = 'none'
  $('.content__maintenance').style.display = 'none'
  $('.content__accessories').style.display = 'block'
}