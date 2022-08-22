
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

// Selected player button

document.getElementById('sakib-button').addEventListener('click', function () {
    const sakib = getPlayersNameById('sakib');
    setPlayersById('all-players', sakib);
})

document.getElementById('taskin-button').addEventListener('click', function () {
    const sakib = getPlayersNameById('taskin');
    setPlayersById('all-players', sakib);
})

document.getElementById('liton-button').addEventListener('click', function () {
    const sakib = getPlayersNameById('liton');
    setPlayersById('all-players', sakib);
})

document.getElementById('ashraful-button').addEventListener('click', function () {
    const sakib = getPlayersNameById('ashraful');
    setPlayersById('all-players', sakib);
})

document.getElementById('mahmud-button').addEventListener('click', function () {
    const sakib = getPlayersNameById('mahmud');
    setPlayersById('all-players', sakib);
})

document.getElementById('soumya-button').addEventListener('click', function () {
    const sakib = getPlayersNameById('soumya');
    setPlayersById('all-players', sakib);
})

document.getElementById('fiz-button').addEventListener('click', function () {
    const sakib = getPlayersNameById('fiz');
    setPlayersById('all-players', sakib);
})

document.getElementById('rubel-button').addEventListener('click', function () {
    const sakib = getPlayersNameById('rubel');
    setPlayersById('all-players', sakib);
})

document.getElementById('sabbir-button').addEventListener('click', function () {
    const sakib = getPlayersNameById('sabbir');
    setPlayersById('all-players', sakib);
})


