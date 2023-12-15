$(document).ready(function () {
    $('#signUpForm').submit(function (e) {
        const fullName = $('#inputFullName').val();
        const email = $('#inputEmail').val();
        const phone = $('#inputPhone').val();
        const password = $('#inputPassword').val();
        const confirmPassword = $('#inputConfirmPassword').val();

        if (!validateEmail(email) || password.length < 6 || password !== confirmPassword || fullName === '' || phone === '') {
            e.preventDefault();
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
            }
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
            }
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
            }
            if (fullName === '') {
                alert('Please enter your full name.');
            }
            if (phone === '') {
                alert('Please enter your phone number.');
            }
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Toggle password visibility for password field
    $('#showPasswordRegister').on('click', function () {
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

    // Toggle password visibility for confirm password field
    $('#showConfirmPasswordRegister').on('click', function () {
        const confirmPasswordField = $('#inputConfirmPassword');
        const fieldType = confirmPasswordField.attr('type');
        if (fieldType === 'password') {
            confirmPasswordField.attr('type', 'text');
            $('#eyeConfirmIcon').removeClass('fa-eye-slash').addClass('fa-eye');
        } else {
            confirmPasswordField.attr('type', 'password');
            $('#eyeConfirmIcon').removeClass('fa-eye').addClass('fa-eye-slash');
        }
    });
});