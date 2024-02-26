//SignUp form
function signUpForm() {
    // Email and Password Regex for validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Accessing form data
    var validation = document.getElementById('validation');
    var errors = "";
    var validate = true;
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPass = document.getElementById('confirm-password');

    //.test compares email field with regex.
    if (!emailRegex.test(email.value)) {
        errors += '<p style="color:red;">Please enter a valid email address.</p>';
        email.focus();
        validate = false;
    }

    //checks wether the password's match.
    if (!(password.value === confirmPass.value)) {
        errors += '<p style="color:red;">Password are different.</p>';
        confirmPass.focus();
        validate = false;
    }


    if (!validate) {
        validation.innerHTML = errors;
        rules.innerHTML = `<p>*Valid email address</p>`
        return false;
    }

    return true;
}
