function calculateTip(billAmount, tipPercentage) {
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2)); 
}

// Do not modify the below lines
module.exports = { calculateTip };