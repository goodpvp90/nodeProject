const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const loginVal = require('./public/scripts/login.js');
const signupVal = require('./public/scripts/signup.js');
const db = require('./db.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Handle login form submission
app.post('/log-in', function (req, res) {
  const { username, password } = req.body;
  var login = loginVal.loginForm(username, password)
  if (login != true)
    res.redirect(login);
  else {
    // Redirect to contact form or send contact form HTML
    var val = db.validateLogin(username, password);
    if (val == true)
      res.sendFile(path.join(__dirname, 'views/contact.html'));
    else {
      res.redirect(val)
    }
  }
});

// Define a route for the root URL that serves the HTML page
app.get('/', function (req, res) {
  // Construct the file path to the HTML file
  const filePath = path.join(__dirname, 'views/index.html');
  // Send the HTML file as a response
  res.sendFile(filePath);
});

app.get('/log-in', function (req, res) {
  // Construct the file path to the HTML file
  const filePath = path.join(__dirname, 'views/login.html');
  // Send the HTML file as a response
  res.sendFile(filePath);
});

app.get('/signup', function (req, res) {
  // Construct the file path to the HTML file
  const filePath = path.join(__dirname, 'views/signup.html');
  // Send the HTML file as a response
  res.sendFile(filePath);
});

// Start the server on port 8080
app.listen(8080, function () {
  console.log('Server is running on http://localhost:8080');
});