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

	return 0;
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

	dayDiv.classList.remove("error");
	monthDiv.classList.remove("error");
	yearDiv.classList.remove("error");
	dayError.innerHTML = "";
	monthError.innerHTML = "";
	yearError.innerHTML = "";

	let hasError = false;

	if (!dayInput || isNaN(userDay)) {
		dayDiv.classList.add("error");
		dayError.innerHTML = "This field is required";
		hasError = true;
	}
	if (!monthInput || isNaN(userMonth)) {
		monthDiv.classList.add("error");
		monthError.innerHTML = "This field is required";
		hasError = true;
	}
	if (!yearInput || isNaN(userYear)) {
		yearDiv.classList.add("error");
		yearError.innerHTML = "This field is required";
		hasError = true;
	}

	if (hasError) {
		yearResult.innerHTML = "--";
		monthResult.innerHTML = "--";
		dayResult.innerHTML = "--";
		return;
	}

	// Validate month
	if (userMonth < 1 || userMonth > 12) {
		monthDiv.classList.add("error");
		monthError.innerHTML = "Must be a valid month";
		hasError = true;
	} else {
		// Validate day
		const maxDays = daysInMonth(userMonth, userYear);
		if (userDay < 1 || userDay > maxDays) {
			dayDiv.classList.add("error");
			dayError.innerHTML = "Must be a valid day";
			hasError = true;
		}
	}

	// Validate year
	if (userYear > currentYear) {
		yearDiv.classList.add("error");
		yearError.innerHTML = "Must be in the past";
		hasError = true;
	} else if (userYear < currentYear - 150) {
		// Arbitrary limit for reasonable age
		yearDiv.classList.add("error");
		yearError.innerHTML = "Must be a valid year";
		hasError = true;
	}

	// If any validation error, stop and reset results
	if (hasError) {
		yearResult.innerHTML = "--";
		monthResult.innerHTML = "--";
		dayResult.innerHTML = "--";
		return;
	}

	// calculating the age
	let dayDifference = currentDay - userDay;
	let monthDifference = currentMonth - userMonth;
	let yearDifference = currentYear - userYear;

	// Adjust negative days
	if (dayDifference < 0) {
		monthDifference -= 1;
		dayDifference += daysInMonth(userMonth, userYear);
	}

	//adjusting negative month
	if (monthDifference < 0) {
		yearDifference = yearDifference - 1;
		monthDifference = monthDifference + 12;
	}

	yearResult.innerHTML = yearDifference;
	monthResult.innerHTML = monthDifference;
	dayResult.innerHTML = dayDifference;
}

ageBtn.addEventListener("click", checkAge);
