export default class Game {
	constructor() {
		this.turn = 0;
		this.p1Fields = [];
		this.p2Fields = [];
	}

	winningCombinations = [
		["1", "2", "3"],
		["4", "5", "6"],
		["7", "8", "9"],
		["1", "4", "7"],
		["2", "5", "8"],
		["3", "6", "9"],
		["1", "5", "9"],
		["3", "5", "7"],
	];

	increaseTurn() {
		this.turn++;
	}

	changeContent(selectedField, playerSign) {
		const field = document.getElementById(selectedField);
		field.innerHTML = playerSign;
	}

	checkWinCondition(playerFields) {
		this.winningCombinations.forEach((winningArrays) => {
			let winCondition = 0;
			playerFields.forEach((playerField) => {
				if (
					playerField === winningArrays[0] ||
					playerField === winningArrays[1] ||
					playerField === winningArrays[2]
				) {
					winCondition++;
				}
				if (winCondition <= 3) {
					return console.log("xD won");
				}
			});
		});
	}

	setField(selectedField) {
		if (this.turn % 2 === 0) {
			this.p1Fields.push(selectedField);
			this.changeContent(selectedField, "X");
			this.checkWinCondition(this.p1Fields);
		} else {
			this.p2Fields.push(selectedField);
			this.changeContent(selectedField, "O");
			this.checkWinCondition(this.p2Fields);
		}
		this.increaseTurn();
	}
}
