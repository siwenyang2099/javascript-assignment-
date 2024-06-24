function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        alert('Please enter valid numbers');
        return;
    }

    const interest = principal * (rate / 100) * years;
    const totalAmount = principal + interest;

    document.getElementById('calculatedInterest').textContent = interest.toFixed(2);
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}
