document.addEventListener("DOMContentLoaded", function () {
    const mortgageForm = document.getElementById("mortgageForm");

    mortgageForm.addEventListener("submit", function (event) {
        const purpose = document.getElementById("purpose").value.trim();
        const bank = document.getElementById("bank").value.trim();
        const loanAmount = document.getElementById("loanAmount").value.trim();
        const citizenship = document.getElementById("citizenship").value.trim();

        // Basic validation
        if (!purpose || !bank || !loanAmount || !citizenship) {
            alert("All fields are required");
            event.preventDefault();
            return;
        }

        // Validate loan amount is a number
        if (isNaN(loanAmount)) {
            alert("Loan amount must be a number");
            event.preventDefault();
            return;
        }
    });
});
