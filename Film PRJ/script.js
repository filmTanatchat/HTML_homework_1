function validateForm() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var email = document.getElementById("email").value;
  var confirmEmail = document.getElementById("confirmEmail").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  if (email !== confirmEmail) {
    alert("Emails do not match");
    return false;
  }

  return true;
}

// Get the search button and input field
const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('#search');

// Add click event listener to the search button
searchButton.addEventListener('click', () => {
  const searchText = searchInput.value.toLowerCase();
  const labelCells = document.querySelectorAll('.portfolio-table .label');
  const descriptionCells = document.querySelectorAll('.portfolio-table .port-description');

  // Loop through label cells and hide/show based on search text
  labelCells.forEach((cell) => {
    const label = cell.textContent.toLowerCase();
    const parentRow = cell.parentNode;

    if (label.includes(searchText)) {
      parentRow.style.display = '';
    } else {
      parentRow.style.display = 'none';
    }
  });

  // Loop through description cells and hide/show based on search text
  descriptionCells.forEach((cell) => {
    const description = cell.textContent.toLowerCase();
    const parentRow = cell.parentNode;

    if (description.includes(searchText)) {
      parentRow.style.display = '';
    } else {
      parentRow.style.display = 'none';
    }
  });
});
