var timeHour= new Date().getHours();
var timeHr= document.getElementById("hour");
timeHr.innerHTML = timeHour;

var timeMin= new Date().getMinutes();
var timeMn= document.getElementById("minute");
timeMn.innerHTML = timeMin;

var timeMonth=new Date().getMonth();
var timeMon= document.getElementById("month");
timeMon.innerHTML = timeMonth;

var timeDate= new Date().getDate();
var timeDt= document.getElementById("date");
timeDt.innerHTML = timeDate;
