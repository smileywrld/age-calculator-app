const dayError = document.querySelector(".day-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");
const ageBtn = document.querySelector(".icon");

function checkAge() {
	const userDay = document.getElementById("day").value;
	const userMonth = document.getElementById("month").value;
	const userYear = document.getElementById("year").value;

	if (!userDay || !userMonth || !userYear) {
		dayError.innerHTML = "All fields are required";
		monthError.innerHTML = "All fields are required";
		yearError.innerHTML = "All fields are required";
		document.getElementsByTagName("label").style.color = "hsl(0, 1%, 44%)";
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

	// variables for the current calender

	const currentDate = new Date();
	const currentDay = currentDate.getDate();
	const currentMonth = currentDate.getMonth() + 1;
	const currentYear = currentDate.getFullYear();
	console.log(currentMonth);

	// variables for the difference
	let dayDifference = currentDay - userDay;
	let monthDifference = currentMonth - userMonth;
	let yearDifference = currentYear - userYear;

	// adjsuting negative days
	if (dayDifference < 0) {
		monthDifference = monthDifference - 1;
		dayDifference =
			dayDifference + daysInMonth(currentMonth - 1, currentYear);

		//adjusting negative days
		if (monthDifference < 0) {
			yearDifference = yearDifference - 1;
			monthDifference = monthDifference + 12;
		}
	}
}

document.addEventListener("DOMContentLoaded", checkAge);
ageBtn.addEventListener("click", checkAge);
