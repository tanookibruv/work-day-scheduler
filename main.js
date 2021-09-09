//Variables using moment to grab today's date.
const today = moment().format('ll');
var currentDayEl = document.getElementById('currentDay')
currentDayEl.innerHTML = today;

var startTime = moment('7:00 AM', 'hh:mm A').format('hh:mm A');
var endTime = moment('11:00 PM', 'hh:mm A').format('hh:mm A');
var timeRange = [startTime, endTime];
console.log(timeRange)