export default class Gameboard {
	constructor() {
		this.rows = 3;
		this.cols = 3;
	}
	createField() {
		const playField = document.getElementById("playfield");
		const totalFields = this.rows * this.cols;
		for (let i = 0; i < totalFields; i++) {
			let newElement = document.createElement("div");
			newElement.textContent = i + 1;
			newElement.className = `field-${i + 1}`;
			playField.appendChild(newElement);
		}
	}
}
