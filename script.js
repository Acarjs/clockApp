const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')
const html = document.querySelector('html')
const circle = document.querySelector('.circle')

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const months = [
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

toggle.addEventListener('click', e => {
  html.classList.toggle('dark')
  if (html.classList.contains('dark')) {
    toggle.innerText = 'Light Mode'
  } else {
    toggle.innerText = 'Dark Mode'
  }
})

function setTime() {
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const hours = time.getHours()
  const hoursForClock = hours % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const currentDate = time.getDate()

  hourEl.style.transform = `translate(-50%, -100%) rotate(${
    hoursForClock * 30
  }deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`
  dateEl.innerText = `${days[day]}, ${months[month]}`

  if (minutes < 10) {
    timeEl.innerText = `${hoursForClock}:0${minutes}`
  } else {
    timeEl.innerText = `${hoursForClock}:${minutes}`
  }

  const span = document.createElement('span')
  span.classList.add('circle')
  span.innerText = `${currentDate}`

  dateEl.appendChild(span)

  const spanAmPm = document.createElement('span')
  spanAmPm.classList.add('amPm')

  if (hours >= 12) {
    spanAmPm.innerText = `PM`
  } else {
    spanAmPm.innerText = `AM`
  }

  timeEl.appendChild(spanAmPm)
}
setInterval(setTime, 1000)
