$(document).ready(function () {
    $('#signInForm').submit(function (e) {
      const email = $('#inputEmail').val();
      const password = $('#inputPassword').val();

      if (!validateEmail(email) || password.length < 6) {
        e.preventDefault();
        if (!validateEmail(email)) {
          alert('Please enter a valid email address.');
        }
        if (password.length < 6) {
          alert('Password must be at least 6 characters long.');
        }
      }
    });

    function validateEmail(email) {
      // A simple email validation pattern
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }

    // Toggle password visibility (unchanged)
    $('#showPassword').on('click', function () {
      const passwordField = $('#inputPassword');
      const fieldType = passwordField.attr('type');
      if (fieldType === 'password') {
        passwordField.attr('type', 'text');
        $('#eyeIcon').removeClass('fa-eye-slash').addClass('fa-eye');
      } else {
        passwordField.attr('type', 'password');
        $('#eyeIcon').removeClass('fa-eye').addClass('fa-eye-slash');
      }
    });
  });