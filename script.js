const dayError = document.querySelector(".day-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");
const ageBtn = document.querySelector(".icon");

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

function checkAge() {
	const dayDiv = document.querySelector(".day");
	const monthDiv = document.querySelector(".month");
	const yearDiv = document.querySelector(".year");

	const dayInput = document.getElementById("day").value;
	const monthInput = document.getElementById("month").value;
	const yearInput = document.getElementById("year").value;

	const userDay = parseInt(dayInput, 10);
	const userMonth = parseInt(monthInput, 10);
	const userYear = parseInt(yearInput, 10);

	const yearResult = document.querySelector(".year-difference");
	const monthResult = document.querySelector(".month-difference");
	const dayResult = document.querySelector(".day-difference");

	// variables for the current calender

	const currentDate = new Date();
	const currentDay = currentDate.getDate();
	const currentMonth = currentDate.getMonth() + 1;
	const currentYear = currentDate.getFullYear();
	console.log(currentMonth);

	if (isNaN(userDay)) {
		dayDiv.classList.add("error");
		console.log("Enter the user day");
	} else {
		dayDiv.classList.remove("error");
	}
	if (isNaN(userMonth)) {
		monthDiv.classList.add("error");
		console.log("Enter the user month");
	} else {
		monthDiv.classList.remove("error");
	}
	if (isNaN(userYear)) {
		yearDiv.classList.add("error");
		console.log("Enter the user year");
	} else {
		yearDiv.classList.remove("error");
	}

	if (!dayInput || !monthInput || !yearInput) {
		dayError.innerHTML = "All fields are required";
		monthError.innerHTML = "All fields are required";
		yearError.innerHTML = "All fields are required";
		console.log("all fields are required");
		return;
	} else if (userMonth < 1 || userMonth > 12) {
		monthError.innerHTML = "Invalid month";
		console.log("invalid month");
	} else if (userDay < 1 || userDay > daysInMonth(userMonth, userYear)) {
		dayError.innerHTML = "Invalid day";
		console.log("invalid day");
	} else if (userYear > currentYear) {
		yearError.innerHTML = "Year cannot be in the future";
		console.log("Year cannot be in the future");
	} else {
		dayError.innerHTML = "";
		monthError.innerHTML = "";
		yearError.innerHTML = "";
	}

	// variables for the difference
	let dayDifference = currentDay - userDay;
	let monthDifference = currentMonth - userMonth;
	let yearDifference = currentYear - userYear;

	// adjsuting negative days
	if (dayDifference < 0) {
		monthDifference = monthDifference - 1;
		dayDifference =
			dayDifference + daysInMonth(currentMonth - 1, currentYear);
	}

	//adjusting negative days
	if (monthDifference < 0) {
		yearDifference = yearDifference - 1;
		monthDifference = monthDifference + 12;
	}

	yearResult.innerHTML = yearDifference;
	monthResult.innerHTML = monthDifference;
	dayResult.innerHTML = dayDifference;
}

ageBtn.addEventListener("click", checkAge);
