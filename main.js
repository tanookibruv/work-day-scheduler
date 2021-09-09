const today = moment().format('ll');
console.log(today)

var currentDayEl = document.getElementById('currentDay')
currentDayEl.innerHTML = today;