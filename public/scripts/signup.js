//SignUp form
function signUpForm() {

    // Email and Password Regex for validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\\|[\]{};:/?\.><])[A-Za-z\d!@#$%^&*()-_=+\\|[\]{};:/?\.><]{6,}$/;

    // Accessing form data
    var validation = document.getElementById('validation');
    var errors = "";
    var validate = true;
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPass = document.getElementById('confirm-password');
    // Example: Log the data
    var modalEmail = document.getElementById('modalEmail');
    var modalPassword = document.getElementById('modalPassword');
    var modal = document.getElementById('signupModal');

    //.test compares email field with regex.
    if (!emailRegex.test(email.value)) {
        errors += '<p style="color:red;">Please enter a valid email address.</p>';
        email.focus();
        validate = false;
    }

    //.test compares email field with regex.
    if (!passRegex.test(password.value)) {
        errors += '<p style="color:red;">Please enter a valid password.</p>';
        password.focus();
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
        rules.innerHTML = `<p>*Valid email address</p>
        <p>*Minimum 6 Characters</p>
        <p>*Must Include an Uppercase Character</p>
        <p>*Must Include an Lowercase Character</p>
        <p>*Must Include a Number</p>
        <p>Must Include a Special Character (!, @, #, etc.)</p>
        <p>Supported special characters are: ! @ # $ % ^ & * ( ) - _ = + \ | [ ] { } ; : / ? . > <</p>`
        return false;
    }

    modalEmail.innerText = email.value;
    modalPassword.innerText = password.value;
    $('#signupModal').modal('show');

}