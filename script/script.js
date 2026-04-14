
const menuElement = document.getElementById('menu')
const closeElement = document.getElementById('close')
const sideMenu = document.querySelector('.menu-bar')

menuElement.addEventListener('click', () => {
  sideMenu.style.left = '0'
  closeElement.style.display = 'block'
})
closeElement.addEventListener('click', () => {
  sideMenu.style.left = '-100%';
  closeElement.style.display = 'none';

})

const menuList = document.querySelectorAll('.items')

menuList.forEach(list => {
  list.addEventListener('click', () => {
    menuList.forEach(item => {
      if (item.classList.contains('active')) {
        item.classList.remove('active')
        item.classList.add('items')
      }
    })

  list.classList.add('active')

  sideMenu.style.left = '-100%';
  closeElement.style.display = 'none';
  })
})

window.addEventListener("load", scrollEffect)
window.addEventListener("scroll", scrollEffect)
function scrollEffect () {
  menuList.forEach(item => {
    item.classList.remove('active')
    if(window.pageYOffset>=0 && window.pageYOffset < 550 && item.textContent.trim() === 'home') {
        item.classList.add('active')
      } else if(window.pageYOffset>=550 && window.pageYOffset < 1024 && item.textContent.trim() === 'about') {
        item.classList.add('active')
      } else if(window.pageYOffset>=1024 && window.pageYOffset < 2141 && item.textContent.trim() === 'project') {
        item.classList.add('active')
      } else if(window.pageYOffset>=2141 && window.pageYOffset < 2800 && item.textContent.trim() === 'skills') {
        item.classList.add('active')
      } else if(window.pageYOffset>=2800 &&  window.pageYOffset < 3900 && item.textContent.trim() === 'contact') {
        item.classList.add('active')
      }
  })
}

const year = new Date().getFullYear();
document.querySelector('.year').textContent = year

