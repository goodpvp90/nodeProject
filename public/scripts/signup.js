//SignUp form

// Attach an event listener to the email input field - update in real time
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

// Attach an event listener to the confirm password input field- update in real time
document.getElementById("confirm-password").addEventListener("input", function () {
    // Get the values of password and confirm password
    const password = document.getElementById("password").value;
    const confirmPassword = this.value;

    // Validate confirm password whenever the input changes
    const confirmPasswordValidationResult = validateConfirmPassword(password, confirmPassword);
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    confirmPasswordError.innerText = confirmPasswordValidationResult;

    // Handle the class based on validation result
    if (confirmPasswordError.innerText === "נראה טוב!") {
        confirmPasswordError.classList.remove("error");
        confirmPasswordError.classList.add("success");
    } else {
        confirmPasswordError.classList.remove("success");
        confirmPasswordError.classList.add("error");
    }
})

// Attach an event listener to the phone number input field - update in real time
document.getElementById("phone").addEventListener("input", function () {
    // Validate phone number whenever the input changes
    const phoneNumber = this.value;
    const phoneNumberValidationResult = validatePhoneNumber(phoneNumber);
    const phoneNumberError = document.getElementById("phoneError");
    phoneNumberError.innerText = phoneNumberValidationResult;

    // Handle the class based on validation result
    if (phoneNumberError.innerText === "נראה טוב!") {
        phoneNumberError.classList.remove("error");
        phoneNumberError.classList.add("success");
    } else {
        phoneNumberError.classList.remove("success");
        phoneNumberError.classList.add("error");
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

function validateConfirmPassword(password, confirmPassword) {
    // Check if password and confirm password match
    if (password !== confirmPassword) {
        return "ססמאות לא תואמות";
    } else {
        return "נראה טוב!";
    }
}

function validatePhoneNumber(phoneNumber) {
    // Check if the cleaned phone number matches the desired pattern
    if (!/^0/.test(phoneNumber)) {
        return "מספר הפלאפון חייב להתחיל בספרה 0"
    }
    if (!/-/.test(phoneNumber)) {
        return "בבקשה הכנס מספר בפורמט 052-2999044"
    }
    if (!/^0[1-9][0-9]-\d{7}$/.test(phoneNumber)) {
        return "מספר הפלאפון צריך להכיל 10 ספרות";
    }

    return "נראה טוב!";
}



