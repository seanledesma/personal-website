var markers = ["X", "O"];
var players = [];
var totals = [];
var winCodes = [7,56,73,84,146,273,292,448];
var gameOver;
var turn = 0;




function startGame()
{
	var counter = 1;
	var innerDivs = "";
	for (i=1; i<= 3; i++)
	{
		innerDivs += '<div id="row-' + i +'">';
	
		for (j = 1; j <=3; j++)
		{
			innerDivs += '<div onclick="markBox(this,' + counter + ');"></div>';
			counter *= 2;
		}
		
		innerDivs += '</div>';
	}
	document.getElementById("game-board").innerHTML = innerDivs;
	
	
	totals = [0,0];
	gameOver = false;
		
	players[0] = prompt("Enter Player One");
	players[1] = prompt("Enter Player Two");
		
	document.getElementById("game-header").innerText = "It's " + players[turn] + "'s Turn";
	
}

function markBox(click, boxValue)
{
	if (!gameOver)
	{
		// add X or O
		click.innerText = markers[turn];
		// increment players total to verify win
		totals[turn] += boxValue;
		
		if (isWin())
		{
			document.getElementById("game-header").innerText = players[turn] + " Wins!";
		}
		else if (gameOver)
		{
			document.getElementById("game-header").innerText = "Draw!";
		}
		else
		{
			// change turns
			if (turn == 1) turn = 0; 
			else turn = 1;
			// stop re-clicking on div
			click.attributes["0"].nodeValue = "";
			// dispay current players name based on turn
			document.getElementById("game-header").innerText = 
			"It's " + players[turn] + "'s Turn";
		}
	}
}

function isWin()
{
	for (i =0; i < winCodes.length; i++)
	{
		if ((totals[turn] & winCodes[i]) == winCodes[i])
		{
			var audio1 = new Audio('audio/greatShot.mp3');
			audio1.play();
			gameOver = true;
			return true;
		}
	}
	
	if(totals[0] + totals[1] == 511)
	{
		var audio2 = new Audio('audio/noLuke.mp3');
		audio2.play();
		gameOver = true;
	}
	
	return false;
}














