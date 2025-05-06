import Player from "./player.js";
import Gameboard from "./gameboard.js";

const startButton = document.getElementById("startbutton");

startButton.addEventListener("click", (event) => {
	console.log(event);
	document.getElementById("startscreen").hidden = true;

	const { player1, player2 } = getPlayers();
	const gameBoard = new Gameboard();
	gameBoard.createField();
	return { player1, player2 };
});

function getPlayers() {
	let player1Name = document.getElementById("player1").value ? document.getElementById("player1").value : "Player 1";
	let player2Name = document.getElementById("player2").value ? document.getElementById("player2").value : "Player 2";
	const player1 = new Player(player1Name);
	const player2 = new Player(player2Name);
	return { player1, player2 };
}
