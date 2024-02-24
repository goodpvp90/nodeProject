const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db.js');
const session = require('express-session');
const mailer = require('./mailer.js');
const app = express();

const requireAuth = (req, res, next) => {
  if (req.session.userId) {
    next(); // User is authenticated, continue to next middleware
  } else {
    res.redirect('/log-in'); // User is not authenticated, redirect to login page
  }
}

app.use(session({
  secret: '123456',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


// Handle Recover Password form submission
app.post('/restore', function (req, res) {
  const { username } = req.body;
  // Redirect to contact form or send contact form HTML
  db.validateEmail(username, function (err, row) {
    if (!row || err)
      res.redirect('/restore?result=false')
    else {
      mailer.restorePassword(username, row.password);
      res.redirect(`/restore?result=true&email=${username}`)
    }
  });
});

// Handle login form submission
app.post('/log-in', function (req, res) {
  const { username, password } = req.body;
  // Redirect to contact form or send contact form HTML
  db.validateLogin(username, password, function (err, row) {
    if (!row || err)
      res.redirect('/log-in?error=Incorrect email or password')
    else {
      req.session.userId = username;
      res.sendFile(path.join(__dirname, 'views/index.html'));
    }
  });
});

// Handle signup form submission
app.post('/signup', function (req, res) {
  const { fname, lname, password, email, phone } = req.body;
  // ADD BACKEND CHECK FOR THE PARAMETERS.
  console.log(req.body);
  db.createUser(fname, lname, email, phone, password, function (err, _row) {
    if (err) {
      res.redirect('/log-in?error=Incorrect email or password') // TODO
    } else {
      console.log("register success");
      res.redirect(`/signup/?show=true&email=${email}&password=${password}`)
    }
  })
});

// Define a route for the root URL that serves the HTML page
app.get('/', requireAuth, function (req, res) {
  // Construct the file path to the HTML file
  const filePath = path.join(__dirname, 'views/index.html');
  // Send the HTML file as a response
  res.sendFile(filePath);
});

app.get('/log-in', function (req, res) {
  if (req.session.userId) {
    // If the user is already logged in, redirect to the homepage
    res.redirect('/');
  }
  else {
    // Construct the file path to the HTML file
    const filePath = path.join(__dirname, 'views/login.html');
    // Send the HTML file as a response
    res.sendFile(filePath);
  }
});

app.get('/restore', function (req, res) {
  if (req.session.userId) {
    // If the user is already logged in, redirect to the homepage
    res.redirect('/');
  }
  else {
    // Construct the file path to the HTML file
    const filePath = path.join(__dirname, 'views/restore.html');
    // Send the HTML file as a response
    res.sendFile(filePath);
  }
});

app.get('/logout', function (req, res) {
  if (req.session.userId) {
    req.session.destroy();
    res.redirect('/login');
  }
  else {
    // Construct the file path to the HTML file
    const filePath = path.join(__dirname, 'views/login.html');
    // Send the HTML file as a response
    res.sendFile(filePath);
  }
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