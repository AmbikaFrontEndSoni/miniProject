document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        clearErrors();

        const email = emailInput.value;
        const password = passwordInput.value;

        if (!validateEmail(email)) {
            showError(emailError, 'Invalid email address');
        }

        if (!validatePassword(password)) {
            showError(passwordError, 'Password must be at least 8 characters');
        }

        if (validateEmail(email) && validatePassword(password)) {
            // Form is valid, you can perform login here
            window.location.href = loginForm.action;
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8;
    }

    function showError(element, message) {
        element.textContent = message;
    }

    function clearErrors() {
        emailError.textContent = '';
        passwordError.textContent = '';
    }
});
