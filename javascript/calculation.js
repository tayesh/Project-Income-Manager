// expense and balance calculations
document.getElementById('calculate').addEventListener('click',function(){
//getting values from site 
    const incomeBox = document.getElementById('income');
    const foodExp = document.getElementById('foodExp');
    const rentExp = document.getElementById('rentExp');
    const clothExp = document.getElementById('clothExp');
    const totalExpOutput = document.getElementById('total-exp-output');
    const balanceOutput = document.getElementById('bal-output')
// declaring variables for calculation
    const income = parseFloat(incomeBox.value); 
    const food = parseFloat(foodExp.value);
    const rent = parseFloat(rentExp.value);
    const cloth =parseFloat(clothExp.value);
// calculation
    const totalExp = food+rent+cloth;
    const balance = income - totalExp;
// showing output
    totalExpOutput.innerText=totalExp;
    balanceOutput.innerText= balance;

})
// savings calculation
document.getElementById('save-btn').addEventListener('click',function(){
    const incomeBox = document.getElementById('income');
    const foodExp = document.getElementById('foodExp');
    const rentExp = document.getElementById('rentExp');
    const clothExp = document.getElementById('clothExp');
    const savingPercentageBox= document.getElementById('saving-percentage-box');
    const remainingBalance = document.getElementById('remaining');
    
    const income = parseFloat(incomeBox.value);
    const food = parseFloat(foodExp.value);
    const rent = parseFloat(rentExp.value);
    const cloth =parseFloat(clothExp.value);
    const savingPercentage =parseFloat(savingPercentageBox.value);
    const savingOutput = document.getElementById('saving-output')
    const savings = (income/100)*savingPercentage;
    savingOutput.innerText = savings;
    const totalExp = food+rent+cloth;
    const balance = income - totalExp;
    remainingBalance.innerText=balance-savings;

})
