const userDay = document.getElementById("day").value;
const userMonth = document.getElementById("month").value;
const userYear = document.getElementById("year").year;

if (!userDay || !userMonth || !userYear) {
	console.log("all fields are required");
} else if (userMonth < 1 || userMonth > 12) {
	console.log("invalid month");
} else if (userDay < 1 || userDay > 32) {
	console.log("invalid day");
} else if (userYear > currentYear) {
	console.log("Year cannot be in the future");
}

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();
console.log(currentMonth);
