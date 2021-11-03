const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
let todayDay = new Date().getDay()
let todayDate = new Date().getDate()
const todayDayHeader = document.querySelector('.header-day')
const todayDateHeader = document.querySelector('.header-date')
let currentMonth = new Date().getMonth()
let currentMonthName = monthNames[currentMonth]
let currentYear = new Date().getFullYear()
const currentMonthYear = document.querySelector('.current-month')
const monthPrevButton = document.querySelector('.button-prev')
let tableDays = document.getElementById('table-header')
const monthNextButton = document.querySelector('.button-next')
const tbodyElement = document.querySelector('tbody')

todayDayHeader.textContent = dayNames[todayDay]
todayDateHeader.textContent = String(todayDate)
currentMonthYear.textContent = currentMonthName + ' ' + currentYear

function monToSun() {
  for (let i = 0; i < dayNames.length; i++) {
    let temp_html = `<th>${dayNames[i]}</th>`
    tableDays.insertAdjacentHTML('beforeend', temp_html)
  }
}
monToSun()

function calendarDays() {
  let firstWeekDayCount
  let secondWeekDayCount
  let thirdWeekDayCount
  let fourthWeekDayCount
  let fifthWeekDayCount
  const checkDay = new Date(`${currentMonth + 1} 1, ${currentYear}`).getDay()
  function month31st(currentMonth, weekDayCount, j) {
    return (
      (currentMonth + 1 === 1 ||
        currentMonth + 1 === 3 ||
        currentMonth + 1 === 5 ||
        currentMonth + 1 === 7 ||
        currentMonth + 1 === 8 ||
        currentMonth + 1 === 10 ||
        currentMonth + 1 === 12) &&
      weekDayCount + j + 1 < 32
    )
  }
  function month30th(currentMonth, weekDayCount, j) {
    return (
      (currentMonth + 1 === 4 ||
        currentMonth + 1 === 6 ||
        currentMonth + 1 === 8 ||
        currentMonth + 1 === 9 ||
        currentMonth + 1 === 11) &&
      weekDayCount + j + 1 < 31
    )
  }
  for (let i = 0; i < 6; i++) {
    const trElement = document.createElement('tr')
    tbodyElement.append(trElement)
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < checkDay) {
        const tdElement = document.createElement('td')
        tdElement.textContent = null
        trElement.append(tdElement)
      } else if (i === 0 && j >= checkDay) {
        firstWeekDayCount = j - checkDay + 1
        const tdElement = document.createElement('td')
        tdElement.textContent = String(j - checkDay + 1)
        trElement.append(tdElement)
      } else if (i === 1) {
        secondWeekDayCount = firstWeekDayCount + j + 1
        const tdElement = document.createElement('td')
        tdElement.textContent = String(firstWeekDayCount + j + 1)
        trElement.append(tdElement)
      } else if (i === 2) {
        thirdWeekDayCount = secondWeekDayCount + j + 1
        const tdElement = document.createElement('td')
        tdElement.textContent = String(secondWeekDayCount + j + 1)
        trElement.append(tdElement)
      } else if (i === 3) {
        fourthWeekDayCount = thirdWeekDayCount + j + 1
        const tdElement = document.createElement('td')
        tdElement.textContent = String(thirdWeekDayCount + j + 1)
        trElement.append(tdElement)
      } else if (i === 4) {
        if (currentMonth + 1 === 2 && fourthWeekDayCount + j + 1 < 29) {
          fifthWeekDayCount = fourthWeekDayCount + j + 1
          const tdElement = document.createElement('td')
          tdElement.textContent = String(fourthWeekDayCount + j + 1)
          trElement.append(tdElement)
        } else if (month31st(currentMonth, fourthWeekDayCount, j)) {
          fifthWeekDayCount = fourthWeekDayCount + j + 1
          const tdElement = document.createElement('td')
          tdElement.textContent = String(fourthWeekDayCount + j + 1)
          trElement.append(tdElement)
        } else if (month30th(currentMonth, fourthWeekDayCount, j)) {
          console.log(3)
          fifthWeekDayCount = fourthWeekDayCount + j + 1
          const tdElement = document.createElement('td')
          tdElement.textContent = String(fourthWeekDayCount + j + 1)
          trElement.append(tdElement)
        }
      } else if (i === 5) {
        if (currentMonth + 1 === 2 && fifthWeekDayCount + j + 1 < 29) {
          const tdElement = document.createElement('td')
          tdElement.textContent = String(fourthWeekDayCount + j + 1)
          trElement.append(tdElement)
        } else if (month31st(currentMonth, fifthWeekDayCount, j)) {
          const tdElement = document.createElement('td')
          tdElement.textContent = String(fifthWeekDayCount + j + 1)
          trElement.append(tdElement)
        } else if (month30th(currentMonth, fifthWeekDayCount, j)) {
          const tdElement = document.createElement('td')
          tdElement.textContent = String(fourthWeekDayCount + j + 1)
          trElement.append(tdElement)
        }
      }
    }
  }
}
calendarDays()

monthPrevButton.addEventListener('click', function () {
  if (currentMonth === 0) {
    currentYear -= 1
    currentMonth = 11
    currentMonthName = monthNames[currentMonth]
    currentMonthYear.textContent = currentMonthName + ' ' + currentYear
    todayDayHeader.textContent =
      dayNames[new Date(`${currentMonthName} 1, ${currentYear}`).getDay()]
    $(tbodyElement).empty()
    calendarDays()
  } else {
    currentMonth -= 1
    currentMonthName = monthNames[currentMonth]
    currentMonthYear.textContent = currentMonthName + ' ' + currentYear
    todayDayHeader.textContent =
      dayNames[new Date(`${currentMonthName} 1, ${currentYear}`).getDay()]
    $(tbodyElement).empty()
    calendarDays()
  }
})

monthNextButton.addEventListener('click', function () {
  if (currentMonth === 11) {
    currentYear += 1
    currentMonth = 0
    currentMonthName = monthNames[currentMonth]
    currentMonthYear.textContent = currentMonthName + ' ' + currentYear
    todayDayHeader.textContent = dayNames[todayDay]
    todayDateHeader.textContent = String(todayDate)
    todayDayHeader.textContent =
      dayNames[new Date(`${currentMonthName} 1, ${currentYear}`).getDay()]
    $(tbodyElement).empty()
    calendarDays()
  } else {
    currentMonth += 1
    currentMonthName = monthNames[currentMonth]
    currentMonthYear.textContent = currentMonthName + ' ' + currentYear
    todayDayHeader.textContent = dayNames[todayDay]
    todayDateHeader.textContent = String(todayDate)
    todayDayHeader.textContent =
      dayNames[new Date(`${currentMonthName} 1, ${currentYear}`).getDay()]
    $(tbodyElement).empty()
    calendarDays()
  }
})
