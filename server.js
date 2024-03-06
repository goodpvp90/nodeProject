const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db.js');
const session = require('express-session');
const mailer = require('./mailer.js');
const app = express();
const ejs = require('ejs');
const mortgageval = require('./server-scripts/wheretakemort.js');

const requireAuth = (req, res, next) => {
  if (req.session.userId) {
    next(); // User is authenticated, continue to next middleware
  } else {
    res.redirect('/login'); // User is not authenticated, redirect to login page
  }
}

app.use(session({
  secret: 's56d4fgs6fg54dd56s6sd5f4sdfasxc46548',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Handle Reset Password form submission
app.post('/newpass', function (req, res) {
  const { password, rpassword } = req.body;
  if (password !== rpassword) {
    res.redirect('/newpass?result=notmatch');
    return;
  }

  // Reset password
  db.resetPassword(password, req.session.userId, function (err) {
    if (err) {
      res.redirect('/newpass?result=false');
    } else {
      res.redirect('/newpass?result=true');
    }
  });
});

// Handle Recover Password form submission
app.post('/restore', function (req, res) {
  const { username } = req.body;

  // Validate email
  db.validateEmail(username, function (err, row) {
    if (err || !row) {
      res.redirect('/restore?result=false');
    } else {
      mailer.restorePassword(username, row.password);
      res.redirect(`/restore?result=true&email=${username}`);
    }
  });
});


app.post('/contact', function (req, res) {
  const { fname, lname, phone, email, selection, subject } = req.body;

  // Send email
  mailer.contactForm(fname, lname, phone, email, selection, subject, function (err) {
    if (err) {
      renderTemplate(req, res, 'contact', { result: false });
    } else {
      renderTemplate(req, res, 'contact', { result: true });
    }
  });
});

// Handle mortgage form submission
app.post('/wheregetmort', function (req, res) {
  const { purpose, bank, loanAmount, citizenship } = req.body;
  if (!req.session.userId)
    renderTemplate(req, res, 'login', { success: "nl" });// nl - not logged
  else {
    db.submitMortgageRequest(req.session.userId, purpose, bank, loanAmount, citizenship, function (err) {
      if (err) {
        console.log(err);
        // Handle error appropriately, e.g., render the mortgage form again with an error message
        renderTemplate(req, res, 'wheregetmort', { error: 'An error occurred while processing your request' });
      } else {
        // Mortgage request submitted successfully
        renderTemplate(req, res, 'wheregetmort', { success: true });
      }
    });
  }
});



// Handle login form submission //#### TO DO , CHANGE IT TO EJS HANDLE!
app.post('/login', function (req, res) {
  const { username, password } = req.body;

  // Validate login credentials
  db.validateLogin(username, password, function (err, row) {
    if (err || !row) {
      res.redirect('/login?error=Incorrect email or password');
    } else {
      req.session.userId = username;
      res.redirect('/');
    }
  });
});

// Handle signup form submission
app.post('/signup', function (req, res) {
  const { fname, lname, password, email, phone } = req.body;

  // Create user
  db.createUser(fname, lname, email, phone, password, function (err, _row) {
    if (err) {
      if (err.code === 'SQLITE_CONSTRAINT' && err.errno === 19) {
        if (err.message.includes('phone_number')) {
          res.redirect('/signup?error=Phone number already exists');
        }
        if (err.message.includes('email')) {
          res.redirect('/signup?error=Email already exists');
        }
      } else {
        res.redirect('/signup?error=An error occurred');
      }
    } else {
      console.log("Registration successful");
      res.redirect(`/signup?show=true&email=${email}&password=${password}`);
    }
  });
});

// Index page
app.get('/', function (req, res) {
  renderTemplate(req, res, 'index');
});

// takemortgage page
app.get('/takemortgage', function (req, res) {
  renderTemplate(req, res, 'takemortgage');
});

// where should i get a mortgage page
app.get('/whereGetMort', function (req, res) {
  renderTemplate(req, res, 'whereGetMort', { success: "no result" });
});

// Contact page
app.get('/contact', function (req, res) {
  renderTemplate(req, res, 'contact', { result: "no result" });
});

// Login page
app.get('/login', function (req, res) {
  if (req.session.userId)
    renderTemplate(req, res, 'index');
  else
    renderTemplate(req, res, 'login');
});

// Signup page
app.get('/signup', function (req, res) {
  if (req.session.userId)
    renderTemplate(req, res, 'index');
  else
    renderTemplate(req, res, 'signup');
});

// Change Password page
app.get('/newpass', function (req, res) {
  if (req.session.userId)
    renderTemplate(req, res, 'newpass');
  else
    renderTemplate(req, res, 'index');
});

// Recover password page
app.get('/restore', function (req, res) {
  if (req.session.userId)
    renderTemplate(req, res, 'index');
  else
    renderTemplate(req, res, 'restore');
});

// Logout
app.get('/logout', function (req, res) {
  if (req.session.userId) {
    req.session.destroy();
  }
  res.redirect('/');
});

// Function to render templates
function renderTemplate(req, res, templateName, templateData = {}) {
  console.log(templateData);
  let templatePath = path.join(__dirname, 'views', `${templateName}.ejs`);
  if (req.session.userId) {
    db.getFname(req.session.userId, function (err, row) {
      if (err) {
        res.status(500).send('Error retrieving user data');
      } else {
        templateData.firstname = row.firstname;
        templateData.currentPage = templateName;
        render(templatePath, templateData, res);
      }
    });
  } else {
    templateData.firstname = "אורח";
    templateData.currentPage = templateName;
    render(templatePath, templateData, res);
  }
}

// Function to render templates after fetching sidebar data
function render(templatePath, templateData, res) {
  ejs.renderFile(templatePath, templateData, function (err, renderedHtml) {
    if (err) {
      console.error(err);
      res.status(500).send('Error rendering template');
    } else {
      res.send(renderedHtml);
    }
  });
}

// Close database connection when the server is shutting down
process.on('SIGINT', () => {
  db.closeConnection(() => {
    console.log('Database connection closed.');
    process.exit();
  });
});

// Start the server on port 8080
app.listen(3005, function () {
  console.log('Server is running on http://localhost:8080');
});