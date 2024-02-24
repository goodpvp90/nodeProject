//Login Form
function loginForm(mail, pass) {
    // Email and Password Regex for validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\\|[\]{};:/?\.><])[A-Za-z\d!@#$%^&*()-_=+\\|[\]{};:/?\.><]{6,}$/;

    // Accessing form data
    var errors = "";
    var validate = true;

    //.test compares email field with regex.
    if (!emailRegex.test(mail)) {
        errors += '<p style="color:red;">Please enter a valid email address.</p>';
        validate = '/log-in?error=it is not an email';
    }


    /*if(!validate){
          rules.innerHTML = `<p>*Valid email address</p>
          <p>*Minimum 6 Characters</p>
          <p>*Must Include an Uppercase Character</p>
          <p>*Must Include an Lowercase Character</p>
          <p>*Must Include a Number</p>
          <p>Must Include a Special Character (!, @, #, etc.)</p>
          <p>Supported special characters are: ! @ # $ % ^ & * ( ) - _ = + \ | [ ] { } ; : / ? . > <</p>`
          return false;
      }*/
    if (validate != true) {
        return validate;
    }
    return true;
}

module.exports = {
    loginForm: loginForm
}
