var defaultPlayers = "0";
var defaultLife = 0;
var modal, nameModal;
var playerNames = [];

window.onload = function(){
	//Pop up modal from w3 schools
	// Get the modal
	modal = document.getElementById('magicModal');
	nameModal = document.getElementById('magicNameModal');
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal 
	modal.style.display = "block";

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	window.onclick = function(event) {
		if (event.target == nameModal) {
			nameModal.style.display = "none";
		}
	}
}

function setupNext(){
	defaultPlayers = document.getElementById('numberOfPlayers').value;
	defaultLife = document.getElementById('startingLife').value;
	modal.style.display = "none";
	document.getElementById('nameInputs').innerHTML = '<br>';
	for(var i = 0; i<defaultPlayers; i++){
		document.getElementById('nameInputs').innerHTML += 'Player '+(i + 1)+' Name: <input type="text" id="player'+(i+1)+'Name" placeholder="Player '+(i+1)+'"><br><br>';
	}
	nameModal.style.display = "block";
}

function finalSetup(){
	for(var i = 0; i<defaultPlayers; i++){
		playerNames[i] = document.getElementById('player'+(i+1)+'Name').value;
		if(playerNames[i] == '')
			playerNames[i] = 'Player ' + ( i + 1 );
	}
	nameModal.style.display = "none";
	setupPlayers();
}

function setupPlayers(){
	if(defaultPlayers == 6){
		document.getElementById('pageContent').innerHTML = '<table class="gameTable" align="center">'
			+ '<tr>'
				+ '<th>'+playerNames[0]+'<br>Damage:<input id="player1Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player1LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player1PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player1Life">'+defaultLife+'</div><div class="poisonTotals" id="player1Poison">0</div></th>'
				+ '<th>'+playerNames[1]+'<br>Damage:<input id="player2Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player2LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player2PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player2Life">'+defaultLife+'</div><div class="poisonTotals" id="player2Poison">0</div></th>'
				+ '<th>'+playerNames[2]+'<br>Damage:<input id="player3Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player3LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player3PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player3Life">'+defaultLife+'</div><div class="poisonTotals" id="player3Poison">0</div></th>'
			+ '</tr>'
			+ '<tr>'
				+ '<th colspan="3"><button onclick="update()" type="button">update</button></th>'
			+ '</tr>'
			+ '<tr>'
				+ '<th>'+playerNames[3]+'<br>Damage:<input id="player4Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player4LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player4PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player4Life">'+defaultLife+'</div><div class="poisonTotals" id="player4Poison">0</div></th>'
				+ '<th>'+playerNames[4]+'<br>Damage:<input id="player5Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player5LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player5PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player5Life">'+defaultLife+'</div><div class="poisonTotals" id="player5Poison">0</div></th>'
				+ '<th>'+playerNames[5]+'<br>Damage:<input id="player6Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player6LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player6PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player6Life">'+defaultLife+'</div><div class="poisonTotals" id="player6Poison">0</div></th>'
			+ '</tr>'
		+ '</table>';
	} else if(defaultPlayers == 5){
		document.getElementById('pageContent').innerHTML = '<table class="gameTable" align="center">'
			+ '<tr>'
				+ '<th colspan="2">'+playerNames[0]+'<br>Damage:<input id="player1Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player1LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player1PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player1Life">'+defaultLife+'</div><div class="poisonTotals" id="player1Poison">0</div></th>'
				+ '<th colspan="2">'+playerNames[1]+'<br>Damage:<input id="player2Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player2LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player2PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player2Life">'+defaultLife+'</div><div class="poisonTotals" id="player2Poison">0</div></th>'
				+ '<th colspan="2">'+playerNames[2]+'<br>Damage:<input id="player3Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player3LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player3PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player3Life">'+defaultLife+'</div><div class="poisonTotals" id="player3Poison">0</div></th>'
			+ '</tr>'
			+ '<tr>'
				+ '<th colspan="3">'+playerNames[3]+'<br>Damage:<input id="player4Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player4LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player4PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player4Life">'+defaultLife+'</div><div class="poisonTotals" id="player4Poison">0</div></th>'
				+ '<th colspan="3">'+playerNames[4]+'<br>Damage:<input id="player5Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player5LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player5PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player5Life">'+defaultLife+'</div><div class="poisonTotals" id="player5Poison">0</div></th>'
			+ '</tr>'
		+ '</table>';
	} else if(defaultPlayers == 4){
		document.getElementById('pageContent').innerHTML = '<table class="gameTable" align="center">'
			+ '<tr>'
				+ '<th>'+playerNames[0]+'<br>Damage:<input id="player1Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player1LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player1PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player1Life">'+defaultLife+'</div><div class="poisonTotals" id="player1Poison">0</div></th>'
				+ '<th>'+playerNames[1]+'<br>Damage:<input id="player2Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player2LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player2PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player2Life">'+defaultLife+'</div><div class="poisonTotals" id="player2Poison">0</div></th>'
			+ '</tr>'
			+ '<tr>'
				+ '<th>'+playerNames[2]+'<br>Damage:<input id="player3Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player3LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player3PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player3Life">'+defaultLife+'</div><div class="poisonTotals" id="player3Poison">0</div></th>'
				+ '<th>'+playerNames[3]+'<br>Damage:<input id="player4Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player4LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player4PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player4Life">'+defaultLife+'</div><div class="poisonTotals" id="player4Poison">0</div></th>'
			+ '</tr>'
		+ '</table>';
	} else if(defaultPlayers == 3){
		document.getElementById('pageContent').innerHTML = '<table class="gameTable" align="center">'
			+ '<tr>'
				+ '<th>'+playerNames[0]+'<br>Damage:<input id="player1Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player1LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player1PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player1Life">'+defaultLife+'</div><div class="poisonTotals" id="player1Poison">0</div></th>'
				+ '<th>'+playerNames[1]+'<br>Damage:<input id="player2Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player2LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player2PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player2Life">'+defaultLife+'</div><div class="poisonTotals" id="player2Poison">0</div></th>'
			+ '</tr>'
			+ '<tr>'
				+ '<th colspan="2">'+playerNames[2]+'<br>Damage:<input id="player3Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player3LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player3PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player3Life">'+defaultLife+'</div><div class="poisonTotals" id="player3Poison">0</div></th>'
			+ '</tr>'
		+ '</table>';
	} else if(defaultPlayers == 2){
		document.getElementById('pageContent').innerHTML = '<table class="gameTable" align="center">'
			+ '<tr>'
				+ '<th>'+playerNames[0]+'<br>Damage:<input id="player1Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player1LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player1PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player1Life">'+defaultLife+'</div><div class="poisonTotals" id="player1Poison">0</div></th>'
				+ '<th>'+playerNames[1]+'<br>Damage:<input id="player2Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player2LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player2PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player2Life">'+defaultLife+'</div><div class="poisonTotals" id="player2Poison">0</div></th>'
			+ '</tr>'
		+ '</table>';
	} else if(defaultPlayers == 1){
		document.getElementById('pageContent').innerHTML = '<table class="gameTable" align="center">'
			+ '<tr>'
				+ '<th>'+playerNames[0]+'<br>Damage:<input id="player1Damage" class="updateNumbers" type="number"><br>Life Gained:<input id="player1LifeGain" class="updateNumbers" type="number"><br>Poison:<input id="player1PoisonTaken" class="updateNumbers" type="number"><br><div class="lifeTotals" id="player1Life">'+defaultLife+'</div><div class="poisonTotals" id="player1Poison">0</div></th>'
			+ '</tr>'
		+ '</table>';
	}
	for(var i=0; i<defaultPlayers; i++){
		document.getElementById('player'+(i+1)+'Damage').defaultValue = 0;
		document.getElementById('player'+(i+1)+'LifeGain').defaultValue = 0;
		document.getElementById('player'+(i+1)+'PoisonTaken').defaultValue = 0;
	}
}

function update(){
	for(var i = 0; i<defaultPlayers; i++){
		document.getElementById('player'+(i+1)+'Life').innerHTML -= document.getElementById('player'+(i+1)+'Damage').value;
		document.getElementById('player'+(i+1)+'Life').innerHTML = parseInt(document.getElementById('player'+(i+1)+'Life').innerHTML) + parseInt(document.getElementById('player'+(i+1)+'LifeGain').value);
		document.getElementById('player'+(i+1)+'Poison').innerHTML = parseInt(document.getElementById('player'+(i+1)+'Poison').innerHTML) + parseInt(document.getElementById('player'+(i+1)+'PoisonTaken').value);
	}
	clearForm();
}

function clearForm(){
	for(var i = 0; i<defaultPlayers; i++){
		document.getElementById('player'+(i+1)+'Damage').value = 0;
		document.getElementById('player'+(i+1)+'LifeGain').value = 0;
		document.getElementById('player'+(i+1)+'PoisonTaken').value = 0;
	} 
}