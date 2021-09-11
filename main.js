//Variables using moment to grab today's date.
const today = moment().format('dddd, MMMM Do YYYY');
var currentDayEl = document.getElementById('currentDay')
currentDayEl.innerHTML = today;

//Variable to grab time by the hour for daily planner
var hourTime = moment().format('h A');

var text = [];
$('.hour').each(function() {
    text[text.length]=$(this).text();
});
console.log

function pastTime() {
    var pastRow = document.querySelectorAll('.hour')[0].innerHTML;
    var rowEl = document.querySelectorAll('.row');
    if (pastRow <= hourTime) {
        rowEl.className += " past"
    }
    console.log(pastRow, hourTime)
}

window.onload = pastTime();