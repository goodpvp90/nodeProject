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
    validate = false;
  }

  //.test compares email field with regex.
  if (!passRegex.test(pass)) {
    errors += '<p style="color:red;">Please enter a valid password.<p>';
    validate = false;
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
  if (!validate) {
    return false;
  }
  return true;
}

/*
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
        errors +='<p style="color:red;">Please enter a valid email address.</p>';
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
    if(!(password.value === confirmPass.value)){
        errors += '<p style="color:red;">Password are different.</p>';
        confirmPass.focus();
        validate = false;
    }

    if(!validate){
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


function contactForm() {
    // Email and Password Regex for validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Accessing form data
    var name = document.getElementById('name');
    var subject = document.getElementById('subject');
    var validation = document.getElementById('validation');
    var errors = "";
    var validate = true;
    var email = document.getElementById('email');
    
    //.test compares email field with regex.
    if (!emailRegex.test(email.value)) {
        errors +='<p style="color:red;">Please enter a valid email address.</p>';
        email.focus();
        validate = false;
    }

    if(!name.value){
        errors +='<p style="color:red;">Enter a name</p>';
        name.focus();
        validate = false;
    }

    if(!subject.value){
        errors +='<p style="color:red;">Enter a subject</p>';
        subject.focus();
        validate = false;
    }

    if(!validate){
        validation.innerHTML = errors;
        rules.innerHTML = `<p>*Valid email address</p>
                            <p>*Enter a name</p>
                            <p>*Enter a subject</p>`;
        return false;
    }

    alert("email: " + email.value +" name: " + name.value);
}

function openEmailClient() {
    // Replace 'recipient@example.com' with the recipient's email address
    // You can also specify other parameters like subject and body
    var emailAddress = 'recipient@example.com';

    var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress);
  

    // Open the default email client with the specified parameters
    window.location.href = mailtoLink;
}
*/

module.exports = {
  loginForm,
};
