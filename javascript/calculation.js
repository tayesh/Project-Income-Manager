function check(x) {
    const input = x;
    var sum = 0;
    for (const a of input) {
        if (a != "1" && a != '2' && a != '3' && a != '4' && a != '5' && a != '6' && a != '7' && a != '8' && a != '9' && a != '0' && a != '-') {
            sum++
        }
    }
    return sum;
}
function inputChangeToFloat(inputID, errorID) {
    const errorText = document.getElementById(errorID);
    const inputText = document.getElementById(inputID).value;

    if (check(inputText) > 0) {
        errorText.innerText = 'please insert only number';
        return;
    }
    else if (check(inputText) == 0) {
        const input = parseFloat(inputText);
        if (input < 0) {
            errorText.innerText = 'please insert only positive number';
            return;
        }
        else {
            errorText.innerText = '';
            return input;
        }

    }

}
document.getElementById('calculate').addEventListener("click", function () {
    const totalExpense = document.getElementById("total-exp-output");
    const balanceText = document.getElementById('bal-output');
    const differenceERROR = document.getElementById('differenceError');
    const totalEXP = inputChangeToFloat("foodExp", "foodError") + inputChangeToFloat("rentExp", "rentError") + inputChangeToFloat("clothExp", "clothError");
    const balance = inputChangeToFloat('income', 'incomeError') - totalEXP;
    if (totalEXP > inputChangeToFloat('income', 'incomeError')) {
        differenceERROR.innerText = 'your income is less then your expenses';
        totalExpense.innerText = '';
        balanceText.innerText = '';
        return;
    }
    else if (isNaN(totalEXP) == true) {
        totalExpense.innerText = '';
        balanceText.innerText = '';
        return;
    }
    else {
        totalExpense.innerText = totalEXP;
        balanceText.innerText = balance;
        return
    }
})
document.getElementById('save-btn').addEventListener('click', function () {
    const savingText = document.getElementById("saving-output");
    const remainingText = document.getElementById('remaining');
    const savingDifferenceERROR = document.getElementById('savingDifferenceError');
    const totalEXP = inputChangeToFloat("foodExp", "foodError") + inputChangeToFloat("rentExp", "rentError") + inputChangeToFloat("clothExp", "clothError");
    const balance = inputChangeToFloat('income', 'incomeError') - totalEXP;
    const savings = (inputChangeToFloat('income', 'incomeError') / 100) * inputChangeToFloat('saving-percentage-box', 'savingError');
    if (savings > balance) {
        savingDifferenceERROR.innerText = 'you dont have enough balance to save';
        savingText.innerText = '';
        remainingText.innerText = '';
        return;
    }
    else {
        savingText.innerText = savings;
        remainingText.innerText = balance - savings;
        return;
    }

})
