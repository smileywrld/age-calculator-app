const userDay = document.getElementById("day").value;
const userMonth = document.getElementById("month").value;
const userYear = document.getElementById("year").year;

if (!userDay || !userMonth || !userYear) {
	console.log("all fields are required");
} else if (userMonth < 1 || userMonth > 12) {
	console.log("invalid month");
} else if (userDay < 1 || userDay > daysInMonth(userMonth, userYear)) {
	console.log("invalid day");
} else if (userYear > currentYear) {
	console.log("Year cannot be in the future");
}

function daysInMonth(month, year) {
	if (
		month == 1 ||
		month == 3 ||
		month == 5 ||
		month == 7 ||
		month == 8 ||
		month == 10 ||
		month == 12
	) {
		return 31;
	} else if (month == 4 || month == 6 || month == 9 || month == 11) {
		return 30;
	} else if (month == 2) {
		if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
			return 29;
		} else {
			return 28;
		}
	}
}

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();
console.log(currentMonth);

const dayDifference = currentDay - userDay;
const monthDifference = currentMonth - userMonth;
const yearDifference = currentYear - userYear;
