// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Define a route for the root URL that serves the HTML page
app.get('/', function (req, res) {
  // Construct the file path to the HTML file
  const filePath = path.join(__dirname, 'index.html');
  // Send the HTML file as a response
  res.sendFile(filePath);
});

app.get('/login', function (req, res) {
  // Construct the file path to the HTML file
  const filePath = path.join(__dirname, 'login.html');
  // Send the HTML file as a response
  res.sendFile(filePath);
});

app.get('/signup', function (req, res) {
  // Construct the file path to the HTML file
  const filePath = path.join(__dirname, 'signup.html');
  // Send the HTML file as a response
  res.sendFile(filePath);
});

// Start the server on port 8080
app.listen(8080, function () {
  console.log('Server is running on http://localhost:8080');
});