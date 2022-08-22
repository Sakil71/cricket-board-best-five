
// Find Players Id

function getPlayersNameById(selectPlayer){
    const playerName = document.getElementById(selectPlayer);
    const player = playerName.innerText;
    return player;
}

// Set player in Order List

function setPlayersById(setPlayer, selectPlayer){
    const allPlayers = document.getElementById(setPlayer);
    const playerList = document.createElement('li');
    const setList = playerList.innerText = selectPlayer;
    allPlayers.appendChild(playerList);
}