const IMG_WIDTH = 400
const slideContainer = document.querySelector('.slides')
const slideImages = [...document.querySelectorAll('.slide')]

slideContainer.style.width = `${slideImages.length * IMG_WIDTH}px`

let index = 0

function next(){
  if (index < slideImages.length - 1){
    index++
  }
  else index = 0
  slideContainer.style.transform = `translateX(-${IMG_WIDTH*index}px)`
}