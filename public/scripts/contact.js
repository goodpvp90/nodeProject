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
    errors += '<p style="color:red;">Please enter a valid email address.</p>';
    email.focus();
    validate = false;
  }

  if (!name.value) {
    errors += '<p style="color:red;">Enter a name</p>';
    name.focus();
    validate = false;
  }

  if (!subject.value) {
    errors += '<p style="color:red;">Enter a subject</p>';
    subject.focus();
    validate = false;
  }

  if (!validate) {
    validation.innerHTML = errors;
    rules.innerHTML = `<p>*Valid email address</p>
                            <p>*Enter a name</p>
                            <p>*Enter a subject</p>`;
    return false;
  }

  alert("email: " + email.value + " name: " + name.value);
}

function openEmailClient() {
  // Replace 'recipient@example.com' with the recipient's email address
  // You can also specify other parameters like subject and body
  var emailAddress = 'recipient@example.com';

  var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress);


  // Open the default email client with the specified parameters
  window.location.href = mailtoLink;
}