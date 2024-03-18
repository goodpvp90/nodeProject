function mortgageForm() {
    const rtmethod = document.getElementById("rmethod").value;
    const bank = document.getElementById("bank").value;
    const loanAmount = document.getElementById("loanAmount").value;
    const citizenship = document.getElementById("citizenship").value;

    localStorage.setItem('tmrthod', purpose);
    localStorage.setItem('bank', bank);
    localStorage.setItem('loanAmount', loanAmount);
    localStorage.setItem('citizenship', citizenship);
}

function loadMortgageForm() {
    const rmethod = localStorage.getItem('rmethod');
    const bank = localStorage.getItem('bank');
    const loanAmount = localStorage.getItem('loanAmount');
    const citizenship = localStorage.getItem('citizenship');

    document.getElementById("rmethod").value = rmethod;
    document.getElementById("bank").value = bank;
    document.getElementById("loanAmount").value = loanAmount;
    document.getElementById("citizenship").value = citizenship;
}

function cleanLocalStorage() {
    localStorag.removeItem('rmethod');
    localStorage.removeItem('bank');
    localStorage.removeItem('loanAmount');
    localStorage.removeItem('citizenship');
}
