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

	const game = new Game(player1.name, player2.name);
	const playField = document.getElementById("playfield");
	playField.addEventListener("click", eventClick);

	function eventClick(event) {
		game.setField(event.target.id);
		if (game.gameOver) playField.removeEventListener("click", eventClick);
	}
});
