//Variables using moment to grab today's date.
const today = moment().format('ll');
var currentDayEl = document.getElementById('currentDay')
currentDayEl.innerHTML = today;

//Variable to grab time by the hour for daily planner
var hourTime = moment().format('h A');
