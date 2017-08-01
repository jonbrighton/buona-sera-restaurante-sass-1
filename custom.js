const specialMenu = document.querySelector('.special-menu')
const mainMenu = document.querySelector('.main-menu')
const menuContainer = document.querySelector('.menu-container')
const setMenu = document.querySelector('.set-menu')
const door = document.querySelector('.door')
const containerOne = document.querySelector('.container1')
const containerTwo = document.querySelector('.container2')
const mapCanvas = document.querySelector('#map-canvas')
const containerThree = document.querySelector('.container3')


specialMenu.addEventListener('click', function () {
  menuContainer.style.cssText = 'transition: 1s; left:0;'
})

mainMenu.addEventListener('click', function () {
  menuContainer.style.cssText = 'transition: 1s; left: -100vw;'
})

setMenu.addEventListener('click', function() {
  menuContainer.style.cssText = 'transition: 1s; left: -200vw;'
})



containerOne.addEventListener('click', function(){
 containerOne.classList.add('fadeout')
})
door.addEventListener('click', function(){
  door.classList.toggle('doorOpen')
  setTimeout(function (){
      containerTwo.style.zIndex = 0;
      containerThree.style.zIndex = 0
  },1000)


})
