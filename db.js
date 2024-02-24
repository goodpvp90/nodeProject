const sqlite3 = require('sqlite3').verbose();

// Establishing SQLite database connection to a file named "database.db"
const db = new sqlite3.Database('database.db', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Create users table if it doesn't exist
        //createUsersTable();
    }
});

/*
// Function to create users table
function createUsersTable() {
    db.run(`CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                firstname TEXT,
                lastname TEXT,
                email TEXT UNIQUE,
                password TEXT
            )`, (err) => {
        if (err) {
            console.error('Error creating users table:', err.message);
        } else {
            console.log('Users table created successfully.');
        }
    });
}*/


// Function to insert a new user into the database
function createUser(firstname, lastname, email, password) {
    db.run(`INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)`, [firstname, lastname, email, password], function (err) {
        if (err) {
            console.error('Error inserting data:', err.message);
        } else {
            console.log(`A new user has been inserted with ID ${this.lastID}`);
        }
    });
}

// Function to validate login credentials
function validateLogin(email, password) {
    db.get(`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password], function (err, row) {
        if (err) {
            console.error('Error querying database:', err.message);
        } else {
            if (row) {
                console.log('Login successful');
                return true;
                // Do something after successful login, like redirecting to another page
            } else {
                console.log('/log-in?error=Incorrect email or password');
                return '/log-in?error=Incorrect email or password';
                // Handle invalid login, such as displaying an error message to the user
            }
        }
    });
}

// Exporting functions to make them accessible from other files
module.exports = {
    createUser: createUser,
    validateLogin: validateLogin,
    closeConnection: () => db.close((err) => {
        if (err) {
            console.error('Error closing database connection:', err.message);
        } else {
            console.log('Closed the database connection.');
        }
    })
};



