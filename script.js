document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  ['name', 'email', 'password', 'confirmPassword'].forEach(id => {
      document.getElementById(id + 'Error').textContent = '';
      document.getElementById(id + 'ErrorIcon').style.display = 'none';
  });

  const name = document.getElementById('name').value;
  if (name.length < 3 || name.length > 20) {
      document.getElementById('nameError').textContent = 'Name must be between 3 and 20 characters.';
      document.getElementById('nameErrorIcon').style.display = 'inline';
      isValid = false;
  }

  const email = document.getElementById('email').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      document.getElementById('emailErrorIcon').style.display = 'inline';
      isValid = false;
  }

  const password = document.getElementById('password').value;
  if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
      document.getElementById('passwordErrorIcon').style.display = 'inline';
      isValid = false;
  }

  const confirmPassword = document.getElementById('confirmPassword').value;
  if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
      document.getElementById('confirmPasswordErrorIcon').style.display = 'inline';
      isValid = false;
  }

  if (isValid) {
    const successPopup = document.getElementById('successPopup');
    successPopup.style.display = 'block';
    setTimeout(() => {
        successPopup.style.display = 'none';
    }, 3000);

    document.getElementById('registrationForm').reset();
}
  
});
