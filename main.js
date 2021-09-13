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

for (let j = 0; j < textEl.length; j++) {
    console.log(textEl[j])
    
}



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

function renderTask() {
    var savedtoDo = JSON.parse(localStorage.getItem("toDo"));
    console.log(savedtoDo)
    textEl.innerHTML = savedtoDo;
}

function saveTask() {
    var toDo = textEl.value;
    localStorage.setItem("toDo", JSON.stringify(toDo));
    renderTask();
}


window.onload = renderTask();
window.onload = matchTime();

saveEl.onclick = saveTask