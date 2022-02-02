alert("Karpykov Ali. CS-2110");
var myDate = new Date();
var myDay = myDate.getDay();

//year
var d = new Date();
var year = d.getUTCFullYear();
var dateStr = year;
document.write("Year: " + dateStr);
document.write("<br/>");

//date
var d = new Date();
var date = d.getUTCDate();
var dateStr = date;
document.write("Date: " + dateStr);
document.write("<br/>");

//day of week
var weekday = ['Sunday', 'Monday', 'Tuesday',
	'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
document.write("Today is: " + weekday[myDay]);
document.write("<br/>");

//hour
var hours = myDate.getHours();
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12;
var minutes = myDate.getMinutes();
minutes = minutes < 10 ? '0' + minutes : minutes;
var myTime = hours + " " + ampm + " : " + minutes + " : " + myDate.getMilliseconds();
document.write("\tCurrent time is: " + myTime);

//calculate days left until your university graduation
function getDays() {
	var oneMinute = 60 * 1000
	var oneHour = oneMinute * 60
	var oneDay = oneHour * 24
	var today = new Date()
	var next = new Date()
	next.setMonth(11)
	next.setDate(25)
	if (today.getMonth() == 11 && today.getDate() > 25) {
		next.setFullYear(next.getFullYear() + 1)
	}
	var diff = next.getTime() - today.getTime()
	diff = Math.floor(diff / oneDay)
	return diff
}
document.write("<br/>");
var header = getDays() + " days left until the freedom!"
document.write("<br/>");
document.write(header);

//calculate multiplication and division of two numbers (input from user).
function multiplyBy() {
	num1 = document.getElementById("firstNumber").value;
	num2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = num1 * num2;
}
function divideBy() {
	num1 = document.getElementById("firstNumber").value;
	num2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = num1 / num2;
}




