
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

    const allPlayerList = document.querySelectorAll('#all-players li');
    const allPlayerLength = allPlayerList.length;

    if (allPlayerLength > 4) {
        alert('You can not select more player');
        return;
    }

    else {
        allPlayers.appendChild(playerList);
    }
}


// Input Field

function getInputFieldById(inputElement) {
    const inputField = document.getElementById(inputElement);
    const inputFieldElementString = inputField.value;
    const inputFieldElement = parseFloat(inputFieldElementString);

    inputField.value = '';
    return inputFieldElement;
}


// Find Expenses id (string to number)

function getExpensesId(idName) {
    const playerCostElement = document.getElementById(idName);
    const playerCostString = playerCostElement.innerText;
    const playerCost = parseFloat(playerCostString);
    return playerCost;
}


// Set expenses amount

function setElementById(textId, inputId) {
    const setExpensesElement = document.getElementById(textId);

    if (isNaN(inputId)) {
        alert('Please Input Your Amount');
        return;
    }

    setExpensesElement.innerText = inputId;
}
