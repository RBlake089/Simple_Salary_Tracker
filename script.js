const payInput = document.getElementById('pay-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const listContainer = document.getElementById('list-container');

// Create the error message element dynamically if it doesn't exist
let errorMessageDiv = document.getElementById("errorMessageDiv");

if (!errorMessageDiv) {
  errorMessageDiv = document.createElement("div");
  errorMessageDiv.id = "errorMessageDiv";
  errorMessageDiv.style.marginTop = "10px"; // Optional styling for the error message container
  document.body.appendChild(errorMessageDiv); // Append to body or a specific section
}
let errorMessage = document.getElementById("errorMessage");
if (!errorMessage) {
  errorMessage = document.createElement("p");
  errorMessage.id = "errorMessage";
  errorMessage.style.color = "red"; // Styling the error message text
  errorMessageDiv.appendChild(errorMessage); // Append error message inside the div
}

addBtn.addEventListener('click', () => {
  // Parse the pay value as a float
  const pay = parseFloat(payInput.value);

  // Validate the pay and date inputs
  if (isNaN(pay) || dateInput.value.trim() === '') {
    errorMessage.textContent = "Please enter a valid pay amount and date.";
    return; // Stop the function execution if invalid inputs
  }
  
  // Clear the error message when inputs are valid
  errorMessage.textContent = ''; 

  // Format the date (optional)
  const date = new Date(dateInput.value);
  const formattedDate = date.toLocaleDateString(); // You can format it how you prefer

  // Create a new list item (li) for the entry
  const listItem = document.createElement('li');
  listItem.className = 'entry-row'; // For styling later
  listItem.innerHTML = `
    <div>${formattedDate}</div>
    <div>$${pay.toFixed(2)}</div>
    <div><button class="delete-btn">Delete</button></div>
  `;

  // Append the new list item to the container
  listContainer.appendChild(listItem);

  // Clear the inputs
  payInput.value = '';
  dateInput.value = '';

  // Add a delete button functionality
  const deleteBtn = listItem.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    listContainer.removeChild(listItem);
  });
});