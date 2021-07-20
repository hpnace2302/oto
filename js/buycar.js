$('.content__submit').onclick = function() {
  $('.content__right').style.display = 'block';
}

// console.log($$('.content__installment .content__submit'))
$$('.content__installment .content__submit')[0].onclick = function() {
  $('.content__installment .content__right').style.display = 'block';
}

const tabsContent = $$('.content__header--item')

tabsContent[0].onclick = function() {
  $('.content__price').style.display = 'block'
  $('.content__cost-estimates').style.display = 'none'
  $('.content__installment').style.display = 'none'
  $('.content__procedure').style.display = 'none'
}
tabsContent[1].onclick = function() {
  $('.content__price').style.display = 'none'
  $('.content__cost-estimates').style.display = 'flex'
  $('.content__installment').style.display = 'none'
  $('.content__procedure').style.display = 'none'
}
tabsContent[2].onclick = function() {
  $('.content__price').style.display = 'none'
  $('.content__cost-estimates').style.display = 'none'
  $('.content__installment').style.display = 'flex'
  $('.content__procedure').style.display = 'none'
}
tabsContent[3].onclick = function() {
  $('.content__price').style.display = 'none'
  $('.content__cost-estimates').style.display = 'none'
  $('.content__installment').style.display = 'none'
  $('.content__procedure').style.display = 'flex'
}
