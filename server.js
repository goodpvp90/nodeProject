const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs'); // Set EJS as the view engine

// Handle login form submission
app.post('/log-in', function(req, res) {
    const { username, password } = req.body;

    // Check if username and password are correct
    if (username === 'Admin' && password === 'Admin') {
        // Redirect to contact form or send contact form HTML
        res.sendFile(path.join(__dirname, 'Contact.html'));
    } else {
        // Redirect to login page with error message
        res.send("Incorrect username or password");
    }
});
  

// Define a route for the root URL that serves the HTML page
app.get('/', function (req, res) {
  // Construct the file path to the HTML file
  const filePath = path.join(__dirname, 'index.html');
  // Send the HTML file as a response
  res.sendFile(filePath);
});

app.get('/log-in', function (req, res) {
  // Construct the file path to the HTML file
  const errorMessage = req.query.error ? req.query.error : ''; // Get error message from query parameter
  const filePath = path.join(__dirname, 'public/login.html');
  // Send the HTML file as a response
  res.sendFile(filePath);
});

app.get('/signup', function (req, res) {
  // Construct the file path to the HTML file
  const filePath = path.join(__dirname, 'public/signup.html');
  // Send the HTML file as a response
  res.sendFile(filePath);
});

app.get('/api/users', function(req, res) {
  var user_id = req.query.id;
  var token = req.query.token;
  var geo = req.query.geo; 
  res.send(user_id + ' ' + token + ' ' + geo);
  });
  

app.get('/style/style.css', function (req, res) {
  // Construct the file path to the HTML file
  const filePath = path.join(__dirname, 'style/style.css');
  // Send the HTML file as a response
  res.sendFile(filePath);
});

// Start the server on port 8080
app.listen(8080, function () {
  console.log('Server is running on http://localhost:8080');
});