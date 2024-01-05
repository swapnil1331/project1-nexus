function validateForm() {
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var signupError = document.getElementById('signupError');

    if (fullname.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      signupError.textContent = 'All fields are required.';
      return false;
    }

    if (password !== confirmPassword) {
      signupError.textContent = 'Passwords do not match.';
      return false;
    }

    return true;
  }

  function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Enter a valid email address.');
      return false;
    }

    emailError.textContent = ''; // Clear any previous error message
    return true;
  }

  document.getElementById('email').addEventListener('change', validateEmail);

  document.getElementById('btn21').onclick = function() {
    // Call your validation function here
    if (validateForm()) {
      alert("Validation successful!");
      // Proceed with any other actions after successful validation
    }
  }
  