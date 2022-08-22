
// Player expenses Calculate

document.getElementById('calculate-button').addEventListener('click', function () {
    const allPlayerList = document.querySelectorAll('#all-players li');
    const allListLength = allPlayerList.length;
    const inputElement = getInputFieldById('per-player-expenses');
    
    const totalPlayerExpenses = allListLength * inputElement;
    setElementById('player-expenses', totalPlayerExpenses);
})

// Calculate Total Expenses

document.getElementById('total-calculate-button').addEventListener('click', function(){
    const managerExpenses = getInputFieldById('manager-expense');
    const coachExpenses = getInputFieldById('coach-expense');
    const allPlayerExpense = getExpensesId('player-expenses');

    const totalCost = managerExpenses + coachExpenses + allPlayerExpense;
    setElementById('total', totalCost);
})