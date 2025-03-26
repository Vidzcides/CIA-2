function isValidEmail(email) {
    // Regular expression for validating an email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateEmail() {
    // Use prompt to get the email input value
    const email = prompt("Enter your email:");

    // Check if the email is valid
    if (email) {
        if (isValidEmail(email)) {
            alert("The email address is valid.");
        } else {
            alert("The email address is invalid. Please enter a valid email address.");
        }
    } else {
        alert("No email entered. Please enter a valid email address.");
    }
}