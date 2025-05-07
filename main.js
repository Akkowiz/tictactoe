import Player from "./player.js";
import Gameboard from "./gameboard.js";
import Game from "./game.js";

const startButton = document.getElementById("startbutton");

startButton.addEventListener("click", (event) => {
	console.log(event);
	document.getElementById("startscreen").hidden = true;

	const player = new Player();
	const { player1, player2 } = player.getPlayers();
	const gameBoard = new Gameboard();
	gameBoard.createField();
});

const game = new Game();
const playField = document.getElementById("playfield");
playField.addEventListener("click", (event) => {
	game.setField(event.target.id);
	console.log("player 1 fields: ", game.p1Fields);
	console.log("player 2 fields: ", game.p2Fields);
});

// gameboard -> check the fields
