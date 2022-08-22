
// Find Players Id

function getPlayersNameById(selectPlayer) {
    const playerName = document.getElementById(selectPlayer);
    const player = playerName.innerText;
    return player;
}

// Set player in Order List

function setPlayersById(setPlayer, selectPlayer) {
    const allPlayers = document.getElementById(setPlayer);
    const playerList = document.createElement('li');
    const setList = playerList.innerText = selectPlayer;
    
    allPlayers.appendChild(playerList);
}

// Input Field

function getInputFieldById(inputElement) {
    const inputField = document.getElementById(inputElement);
    const inputFieldElementString = inputField.value;
    const inputFieldElement = parseFloat(inputFieldElementString);
    
    return inputFieldElement;
}

// Find Expenses id (string to number)

function getExpensesId(idName){
    const playerCostElement = document.getElementById(idName);
    const playerCostString = playerCostElement.innerText;
    const playerCost = parseFloat(playerCostString);
    return playerCost;
}

// Set expenses amount

function setElementById(textId, inputId){
    const setExpensesElement = document.getElementById(textId);
    setExpensesElement.innerText = inputId;
}