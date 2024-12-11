const calculateTax = () => {
    const income = parseFloat(document.getElementById('income').value);
    let tax = 0;

    if (income > 8000000) {
        tax = 2410000 + 0.35 * (income - 8000000);
    } else if (income > 2000000) {
        tax = 490000 + 0.32 * (income - 2000000);
    } else if (income > 800000) {
        tax = 130000 + 0.30 * (income - 800000);
    } else if (income > 400000) {
        tax = 30000 + 0.25 * (income - 400000);
    } else if (income > 250000) {
        tax = 0.20 * (income - 250000);
    } else {
        tax = 0;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your income tax is PHP ${tax.toFixed(2)}`;
};