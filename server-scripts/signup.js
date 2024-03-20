function validate(fname, lname, email, password, rpassword, phone) {
    // Basic email validation using the provided pattern attribute
    if (!/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(email)) {
        return "falseEmail";
    }
    // Check if the cleaned phone number matches the desired pattern
    if (phone.length != 10) {
        console.log(phone, phone.length);
        return "falsePhone";
    }
    if (password != rpassword) {
        return "passnotmatch";
    }
    if (!/^[a-zA-Z]+$/.test(fname) || !/^[a-zA-Z]+$/.test(lname)) {
        return "invalidName";
    }

    // All validations passed
    return true;
}

module.exports = {
    validate: validate
}