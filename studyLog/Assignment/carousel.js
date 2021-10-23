const nextButtonClick = document.querySelector('.carousel-button-next')
const previousButtonClick = document.querySelector('.carousel-button-previous')
let translate = 0
const circleButtonBox = document.querySelector('.circle-button-box')
const circleButtons = new Array(5)
  .fill(1)
  .map((_, index) => document.createElement('div'))
circleButtons.map((data, index) => {
  if (index === 0 && translate === 0) {
    data.style.backgroundColor = 'black'
  } else if (index === 1 && translate === -700) {
    data.style.backgroundColor = 'black'
  } else {
    data.style.backgroundColor = 'lightgray'
  }
  ;(data.style.width = '10px'),
    (data.style.height = '10px'),
    (data.style.borderRadius = '50%'),
    (data.style.marginRight = '10px'),
    circleButtonBox.appendChild(data)
})
nextButtonClick.addEventListener('click', function () {
  if (translate === -2800) {
    translate = 0
    document.querySelector(
      '.carousel-images2-wrapper'
    ).style.transform = `translateX(${translate}px)`
  } else {
    translate -= 700
    document.querySelector(
      '.carousel-images2-wrapper'
    ).style.transform = `translateX(${translate}px)`
  }
  circleButtons.map((data, index) => {
    if (index === 0 && translate === 0) {
      data.style.backgroundColor = 'black'
    } else if (index === 1 && translate === -700) {
      data.style.backgroundColor = 'black'
    } else if (index === 2 && translate === -1400) {
      data.style.backgroundColor = 'black'
    } else if (index === 3 && translate === -2100) {
      data.style.backgroundColor = 'black'
    } else if (index === 4 && translate === -2800) {
      data.style.backgroundColor = 'black'
    } else {
      data.style.backgroundColor = 'lightgray'
    }
  })
})
previousButtonClick.addEventListener('click', function () {
  if (translate === 0) {
    translate = -2800
    document.querySelector(
      '.carousel-images2-wrapper'
    ).style.transform = `translateX(${translate}px)`
  } else {
    translate += 700
    document.querySelector(
      '.carousel-images2-wrapper'
    ).style.transform = `translateX(${translate}px)`
  }
  circleButtons.map((data, index) => {
    if (index === 0 && translate === 0) {
      data.style.backgroundColor = 'black'
    } else if (index === 1 && translate === -700) {
      data.style.backgroundColor = 'black'
    } else if (index === 2 && translate === -1400) {
      data.style.backgroundColor = 'black'
    } else if (index === 3 && translate === -2100) {
      data.style.backgroundColor = 'black'
    } else if (index === 4 && translate === -2800) {
      data.style.backgroundColor = 'black'
    } else {
      data.style.backgroundColor = 'lightgray'
    }
  })
})
// 분명 좋은 코드는 아니다. 리팩토링할 여지가 있으므로 한번 생각을 잘 해보자
