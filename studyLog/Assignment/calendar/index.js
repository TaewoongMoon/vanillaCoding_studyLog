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
const todayDayHeader = document.querySelector('.header-day')
todayDayHeader.textContent = dayNames[todayDay]
let todayDate = new Date().getDate()
const todayDateHeader = document.querySelector('.header-date')
todayDateHeader.textContent = String(todayDate)
let currentMonth = new Date().getMonth()
let currentMonthName = monthNames[currentMonth]
let currentYear = new Date().getFullYear()
const currentMonthYear = document.querySelector('.current-month')
currentMonthYear.textContent = currentMonthName + ' ' + currentYear
const monthPrevButton = document.querySelector('.button-prev')
monthPrevButton.addEventListener('click', function () {
  if (currentMonth === 0) {
    currentYear -= 1
    currentMonth = 11
    currentMonthName = monthNames[currentMonth]
    currentMonthYear.textContent = currentMonthName + ' ' + currentYear
  } else {
    currentMonth -= 1
    currentMonthName = monthNames[currentMonth]
    currentMonthYear.textContent = currentMonthName + ' ' + currentYear
  }
})
const monthNextButton = document.querySelector('.button-next')
monthNextButton.addEventListener('click', function () {
  if (currentMonth === 11) {
    currentYear += 1
    currentMonth = 0
    currentMonthName = monthNames[currentMonth]
    currentMonthYear.textContent = currentMonthName + ' ' + currentYear
  } else {
    currentMonth += 1
    currentMonthName = monthNames[currentMonth]
    currentMonthYear.textContent = currentMonthName + ' ' + currentYear
  }
})
let tableDays = document.querySelector('tr')
let temp_th = document.createElement('th')
function monToSun() {
  for (let i = 0; i < dayNames.length; i++) {
    temp(i)
  }
}
function temp(i) {
  return function () {
    temp_th.textContent = dayNames[i]
    tableDays.append(temp_th)
  }
}
monToSun()
