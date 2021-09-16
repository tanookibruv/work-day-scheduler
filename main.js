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
var textEl = document.getElementsByTagName('textarea');
var saveEl = document.getElementsByClassName('saveBtn');

//for loop for multiple button usage and textarea usage.
for (var i =0; i < saveEl.length; i++) {
    saveEl[i].addEventListener("click", saveTask)
};


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

function saveTask(e) {
    var toDo = document.getElementById("input-" + e.target.id).value;
    localStorage.setItem("toDo" + e.target.id, JSON.stringify(toDo));

    // console.log(localStorage.getItem("toDo" + e.target.id))
}

function renderTask() {
    for (var i =0; i < localStorage.length; i++) {
        $("textarea").append(localStorage.getItem(localStorage.key(i)))
    };
}


window.onload = renderTask();
window.onload = matchTime();
