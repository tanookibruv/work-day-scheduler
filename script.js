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


// function to compare current time to daily planner and fill in textareas from local storage
function matchTime() {
    var hourEls = document.querySelectorAll('.hour');
    hourEls.forEach(element => {
        element.textContent;
        
        if (currentTime !== element.textContent) {
            if (currentTime > element.textContent) {
                // console.log('ct > tt')
                element.parentNode.classList.add('past')
            } else {
                // console.log('ct < tt')
                element.parentNode.classList.add('future')
            }

        } else {
            if (element.textContent === currentTime) {
                // console.log('time is current')
                element.parentNode.classList.add('present')
            }
        }
        // console.log(currentTime, element.textContent);

        // console.log(localStorage.getItem(element.parentNode.children[1].id))

        element.parentNode.children[1].value = JSON.parse(localStorage.getItem(element.parentNode.children[1].id));
    });
};

// function that saves tasks to local storage.
function saveTask(e) {
    var toDo = document.getElementById("input-" + e.target.id).value;
    localStorage.setItem("input-" + e.target.id, JSON.stringify(toDo));
}


window.onload = matchTime();
