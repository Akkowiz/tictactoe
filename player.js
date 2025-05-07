export default class Player {
	constructor(name) {
		this.name = name;
	}

	getPlayers() {
		let player1Name = document.getElementById("player1").value
			? document.getElementById("player1").value
			: "Player 1";
		let player2Name = document.getElementById("player2").value
			? document.getElementById("player2").value
			: "Player 2";
		const player1 = new Player(player1Name);
		const player2 = new Player(player2Name);
		return { player1, player2 };
	}
}
