function isValidEmail(email) {
    // Regular expression for validating an email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateEmail() {
    // Get the email input value
    const email = document.getElementById("emailInput").value;

    // Check if the email is valid
    if (isValidEmail(email)) {
        alert("The email address is valid.");
    } else {
        alert("The email address is invalid. Please enter a valid email address.");
    }
}