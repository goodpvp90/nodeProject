var nodemailer = require('nodemailer');

function restorePassword(email, password) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mashcantarestore@gmail.com',
            pass: 'zerd opzi lnnr cdrw'
        }
    });

    var mailOptions = {
        from: 'MashcantaRestore@gmail.com',
        to: `${email}`,
        subject: 'Restore password for Mashcanta Website',
        text: `Your password for Mashcanta is : ${password}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


function contactForm(fname, lname, phone, email, selection, subject, callback) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mashcantarestore@gmail.com',
            pass: 'zerd opzi lnnr cdrw'
        }
    });

    var mailOptions = {
        from: 'MashcantaRestore@gmail.com',
        to: `calc.task@gmail.com`,
        subject: `${selection}`,
        text: `${fname} ${lname}, Contacting us regarding subject: ${subject}, customer email to reply: ${email}, customer phone: ${phone}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error(error);
            callback(error); // Pass the error to the callback
        } else {
            console.log('Email sent: ' + info.response);
            callback(null); // Pass null for error to the callback
        }
    });
}

module.exports = {
    restorePassword: restorePassword,
    contactForm: contactForm
};