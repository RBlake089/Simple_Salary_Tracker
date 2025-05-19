// DOM Elements
const addBtnEl = document.getElementById("add-btn-el");
const dateEl = document.getElementById("date-el");
const salaryEl = document.getElementById("salary-el");
const dateAndSalaryEl = document.getElementById("date-salary-el");
const dateSalaryEl = document.getElementById("date-salary-el");

// FUNCTIONS
addBtnEl.addEventListener("click", function () {
  if (salaryElNumber()) {
    let date = dateEl.value.trim();
    let salary = salaryEl.value.trim();

    // Log the values to the console
    console.log("Date:", date);
    console.log("Salary:", salary);

     // Get the month name from the date
    const month = getMonthName(date);

    // Create new p elements
    const dateParagraph = document.createElement("p");
    const salaryParagraph = document.createElement("p");

    // Set text content for the new p elements
    dateParagraph.textContent = `Month: ${month}`;
    salaryParagraph.textContent = `Salary: $${salary}`;

    // Append the p elements to the date-salary-el container
    dateSalaryEl.appendChild(dateParagraph);
    dateSalaryEl.appendChild(salaryParagraph);

    // Clear the input fields
    dateEl.value = "";
    salaryEl.value = "";
  }
});

function salaryElNumber() {
  const value = salaryEl.value.trim();
  if (value === "" || isNaN(value)) {
    alert("Please enter a valid number");
    return false;
  }
  return true;
}

// Function to get month name from the date
function getMonthName(date) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const dateObj = new Date(date);
  return monthNames[dateObj.getMonth()]; // Returns the month name (e.g., 'May')
}