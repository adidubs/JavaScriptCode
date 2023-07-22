// Selecting form and input fields
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const dobInput = document.getElementById('dob');

// Adding event listener to form on submit
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Preventing default form submission behavior

  // Validating name field
  if (nameInput.value === '') {
    alert('Please enter your name');
    return false;
  }

  // Validating dob field
  const dobDate = new Date(dobInput.value);
  const currentDate = new Date();
  if (dobInput.value === '') {
    alert('Please enter your date of birth');
    return false;
  } else if (dobDate >= currentDate) {
    alert('Please enter a valid date of birth');
    return false;
  }

  // If both fields are valid, submit the form
  alert('Form submitted successfully!');
  form.submit();
});
