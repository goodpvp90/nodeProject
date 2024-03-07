//Login Form

// function loginForm(mail, pass) {
// // Email and Password Regex for validation
// //var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// var passRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\\|[\]{};:/?\.><])[A-Za-z\d!@#$%^&*()-_=+\\|[\]{};:/?\.><]{6,}$/;

// // Accessing form data
// var errors = "";
// var validate = true;

// //.test compares email field with regex.
// /*if (!emailRegex.test(mail)) {
//     errors += '<p style="color:red;">Please enter a valid email address.</p>';
//     validate = '/login?error=it is not an email';
// }*/

// if (validate != true) {
//     return validate;
// }
// return true;


/// Attach an event listener to the email input field - update in real time
document.getElementById("email").addEventListener("input", async function () {
    // Validate email whenever the input changes
    const email = this.value;
    const emailValidationResult = validateEmail(email);
    const emailError = document.getElementById("emailError");
    emailError.innerText = emailValidationResult;

    // Handle the class based on validation result
    if (emailError.innerText === "נראה טוב!") {
        emailError.classList.remove("error");
        emailError.classList.add("success");
    } else {
        emailError.classList.remove("success");
        emailError.classList.add("error");
    }
});

// Attach an event listener to the password input field- update in real time
document.getElementById("password").addEventListener("input", function () {
    // Validate password whenever the input changes
    const password = this.value;
    const passwordValidationResult = validatePassword(password);
    const passwordError = document.getElementById("passwordError");
    passwordError.innerText = passwordValidationResult;

    // Handle the class based on validation result
    if (passwordError.innerText === "נראה טוב!") {
        passwordError.classList.remove("error");
        passwordError.classList.add("success");
    } else {
        passwordError.classList.remove("success");
        passwordError.classList.add("error");
    }
});



function validateEmail(email) {
    // Basic email validation using the provided pattern attribute
    if (!/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(email)) {
        return " example@gmail.com בבקשה הכנס אימייל בפורמט תקין";
    }
    return "נראה טוב!";
}

function validatePassword(password) {
    // Minimum 6 characters
    if (password.length < 6) {
        return "הססמא חייבת להיות באורך 6 לפחות";
    }

    // Must include an Uppercase character
    else if (!/[A-Z]/.test(password)) {
        return "הססמא חייבת להכיל אות גדולה";
    }

    // Must include a Lowercase character
    else if (!/[a-z]/.test(password)) {
        return "הססמא חייבת להכיל אות קטנה";
    }

    // Must include a Number
    else if (!/\d/.test(password)) {
        return "הססמא חייבת להכיל מספר";
    }

    // Must include at least one Special Character
    else if (!/[!@#$%^&*()_+=\[{\]};:<>|./?,-]/.test(password)) {
        return "הססמא חייבת להכיל סימן";
    }

    // Password meets all criteria
    else {
        return "נראה טוב!";
    }
}

