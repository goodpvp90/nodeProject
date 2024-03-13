//SignUp form
//
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



