//Variables using moment to grab today's date.
const today = moment().format('dddd, MMMM Do YYYY');
var currentDayEl = document.getElementById('currentDay')
currentDayEl.innerHTML = today;

//Variable to grab time by the hour for daily planner
var hourTime = moment().format('h A');

function pastTime() {
    var hourEls = document.querySelectorAll('.hour');
    var rowEl = document.querySelectorAll('.row')
    hourEls.forEach(element => {
        element.textContent;
        
        if (element <= hourTime) {
            rowEl.classList.add("past")
        }
        console.log(element.parentNode)
    });
}

window.onload = pastTime();