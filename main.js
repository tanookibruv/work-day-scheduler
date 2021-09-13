//Variables using moment to grab today's date and fill in header.
const today = moment().format('dddd, MMMM Do YYYY');
var currentDayEl = document.getElementById('currentDay')
currentDayEl.innerHTML = today;

//Variable for current time and timestamps on rows for overall function
var currentTime = moment().format('ha');
var hourEls = document.querySelectorAll('.hour');

//Variables to pastEl, futureEl, and presentEl rows. textarea and saveBtn
var pastEl = document.querySelectorAll('.past');
var presentEl = document.querySelectorAll('.present');
var futureEl = document.querySelectorAll('.future');
var textEl = document.querySelectorAll('.mytext')
var saveEl = document.querySelectorAll('.saveBtn')



// function to compare current time to daily planner
function matchTime() {
    var hourEls = document.querySelectorAll('.hour');
    hourEls.forEach(element => {
        element.textContent;
        
        if (currentTime !== element.textContent) {
            if (currentTime > element.textContent) {
                console.log('ct > tt')
                element.parentNode.classList.add('past')
            } else {
                console.log('ct < tt')
                element.parentNode.classList.add('future')
            }

        } else {
            if (element.textContent === currentTime) {
                console.log('time is current')
                element.parentNode.classList.add('present')
            }
        }
    });
};






window.onload = matchTime();

