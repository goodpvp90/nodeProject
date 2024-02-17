function validateForm() {
    const form = document.forms["signup-form"];
    if (!form.password.value.includes("@")) {
        // Form is invalid
        alert("password must contain @ charecter");
        return false;
    }

    // Everything is good
    return true;
} 