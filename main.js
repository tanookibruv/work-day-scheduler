//Variables using moment to grab today's date.
const today = moment().format('dddd, MMMM Do YYYY');
var currentDayEl = document.getElementById('currentDay')
currentDayEl.innerHTML = today;

//Variable to grab time by the hour for daily planner
var hourTime = moment().format('h A');

var rowEl = document.getElementsByClassName('row')

function pastTime() {
    var pastText = document.getElementById('content').textContent;
    if (pastText <= hourTime) {
        rowEl.classList.add("past");
    }
    console.log(pastText, hourTime)
}

window.onload = pastTime();