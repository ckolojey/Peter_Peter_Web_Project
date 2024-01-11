document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded before executing the script

    var formContainers = document.querySelectorAll('.form-container');
    var registerLink = document.getElementById('register-link');
    var forgotPasswordLink = document.getElementById('forgot-password-link');
    var backToLoginLinkRegistration = document.getElementById('back-to-login-link-registration');
    var backToLoginLinkForgot = document.getElementById('back-to-login-link-forgot');

    function toggleForms(formToShow) {
        // Hide all form containers
        formContainers.forEach(function(container) {
            container.style.display = 'none';
        });

        // Show the selected form container
        var selectedContainer = document.getElementById(formToShow + '-container');
        if (selectedContainer) {
            selectedContainer.style.display = 'block';
        }
    }

    // Show the login form initially
    toggleForms('login');

    // Add event listeners to the links
    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        toggleForms('registration');
    });

    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        toggleForms('forgot-password');
    });

    backToLoginLinkRegistration.addEventListener('click', function(event) {
        event.preventDefault();
        toggleForms('login');
    });

    backToLoginLinkForgot.addEventListener('click', function(event) {
        event.preventDefault();
        toggleForms('login');
    });
});
