// DOM Elements
const addBtnEl = document.getElementById("add-btn-el");
const dateEl = document.getElementById("date-el");
const salaryEl = document.getElementById("salary-el");
const dateAndSalaryEl = document.getElementById("date-salary-el");
const dateSalaryEl = document.getElementById("date-salary-el");

// Month names for display
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// FUNCTIONS
function postSalaryNDate() {
  if (salaryElNumber()) {
    let date = dateEl.value.trim();
    let salary = salaryEl.value.trim();

    // Log the values to the console
    console.log("Date:", date);
    console.log("Salary:", salary);

    // Extract month and year from the date
    const [year, month] = date.split("-");

    // Create new p elements
    const dateParagraph = document.createElement("p");
    const salaryParagraph = document.createElement("p");

    // Set text content for the new p elements
    dateParagraph.textContent = `Month: ${
      monthNames[parseInt(month) - 1]
    } ${year}`; // Full month name and year
    salaryParagraph.textContent = `Salary: $${salary}`;

    // Append the p elements to the date-salary-el container
    dateSalaryEl.appendChild(dateParagraph);
    dateSalaryEl.appendChild(salaryParagraph);

    // Clear the input fields
    dateEl.value = "";
    salaryEl.value = "";
  }
}

function salaryElNumber() {
  const value = salaryEl.value.trim();
  if (value === "" || isNaN(value)) {
    alert("Please enter a valid number");
    return false;
  }
  return true;
}

addBtnEl.addEventListener("click", postSalaryNDate);
salaryEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    postSalaryNDate();
  }
});
