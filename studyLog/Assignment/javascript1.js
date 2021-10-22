// 1. FizzBuzz
for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz')
  } else if (i % 3 === 0) {
    console.log('fizz')
  } else if (i % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(i)
  }
}

// 2. Biggest Number
const BiggestNumber = (a, b, c) => {
  if (a > b) {
    if (b >= c) {
      console.log(a)
    } else if (c > b) {
      if (a > c) {
        console.log(a)
      } else {
        console.log(c)
      }
    }
  } else if (b > a) {
    if (a >= c) {
      console.log(b)
    } else if (c > a) {
      if (b > c) {
        console.log(b)
      } else {
        console.log(c)
      }
    }
  } else if (c > a) {
    if (a >= b) {
      console.log(c)
    } else if (b > a) {
      if (c > b) {
        console.log(c)
      } else {
        console.log(b)
      }
    }
  }
}
BiggestNumber(1, 8, 3)

// 3. Word Position
var word = 'dolphin'
var sentence = 'Where did Jane get the dolphin from, John'
var indexOfD = sentence.indexOf(word)
var indexOfN = indexOfD + word.length - 1
console.log(indexOfD, indexOfN)
