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
                password TEXT,
                phone_number TEXT UNIQUE
            )`, (err) => {
        if (err) {
            console.error('Error creating users table:', err.message);
        } else {
            console.log('Users table created successfully.');
        }
    });
}*/


// Function to insert a new user into the database
function createUser(firstname, lastname, email, phone, password, callback) {
    db.run(`INSERT INTO users (firstname, lastname, email, password, phone_number) VALUES (?, ?, ?, ?, ?)`, [firstname, lastname, email, password, phone], callback);

}

// Function to validate login credentials
function validateLogin(email, password, callback) {
    db.get(`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password], callback);
}

// Function to validate email-restore(password) credentials
function validateEmail(email, callback) {
    db.get(`SELECT password FROM users WHERE email = ?`, [email], callback);
}

// Function to validate email-restore(password) credentials
function resetPassword(newpass, email, callback) {
    db.get(`UPDATE users set password = ? WHERE email = ?`, [newpass, email], callback);
}

// Exporting functions to make them accessible from other files
module.exports = {
    createUser,
    validateLogin,
    validateEmail,
    resetPassword,
    closeConnection: () => db.close((err) => {
        if (err) {
            console.error('Error closing database connection:', err.message);
        } else {
            console.log('Closed the database connection.');
        }
    })
};



