export default class Gameboard {
	constructor() {}

	createField() {
		const playField = document.getElementById("playfield");
		const totalFields = 9;
		for (let i = 0; i < totalFields; i++) {
			let newElement = document.createElement("div");
			newElement.textContent = i + 1;
			newElement.id = i + 1;
			newElement.className = `field-${i + 1}`;
			playField.appendChild(newElement);
		}
	}
}
