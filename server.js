const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Handle login form submission
app.post('/log-in', function (req, res) {
  const { username, password } = req.body;

  // Check if username and password are correct
  if (username === 'Admin' && password === 'Admin') {
    // Redirect to contact form or send contact form HTML
    res.sendFile(path.join(__dirname, 'views/contact.html'));
  } else {
    // Redirect to login page with error message in query parameter
    res.redirect('/log-in?error=Incorrect username or password');
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

app.get('/api/users', function (req, res) {
  var user_id = req.query.id;
  var token = req.query.token;
  var geo = req.query.geo;
  res.send(user_id + ' ' + token + ' ' + geo);
});

// Start the server on port 8080
app.listen(8080, function () {
  console.log('Server is running on http://localhost:8080');
});