

// TO DO, MAKE IT WORK FOR SERVER SIDE CHECK!
function validation(purpose, bank, loanAmount, citizenship) {
    // Basic validation
    if (!purpose || !bank || !loanAmount || !citizenship) {
        // If any required field is missing, redirect back to the mortgage form with an error message
        return res.redirect('/getmort?error=All fields are required');
    }

    // Validate loan amount is a number
    if (isNaN(loanAmount)) {
        return res.redirect('/getmort?error=Loan amount must be a number');
    }
}

module.exports = {
    validation,
}