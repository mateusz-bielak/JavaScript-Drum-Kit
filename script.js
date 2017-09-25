var keys = [65, 83, 68, 70, 71, 72, 74, 75, 76];
var letters = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
var sounds = ["clap", "hihat", "kick", "openhat", "boom", "ride", "snare", "tom", "tink"];
var audio = document.querySelectorAll("audio");
var soundButton = document.querySelectorAll(".sound");

function createButtonElements(elementClass, elementText, elementType, i) {
	var element = document.createElement(elementType);
	element.className = elementClass;
	element.textContent = elementText;
	soundButton[i].appendChild(element);
}

function playSound(event) {
	var key = keys.indexOf(event.keyCode);
	if (key < 0) return;
	audio[key].currentTime = 0;
	audio[key].play();
	soundButton[key].classList.add("sound--glowing");
}

function soundFinished(event) {
	if (event.propertyName != "transform") return;
	this.classList.remove("sound--glowing");
}

for (var i = 0; i < keys.length; i++) {
	createButtonElements("sound__key", letters[i], "kbd", i);
	createButtonElements("sound__name", sounds[i], "span", i);
}

for (var i = 0; i < soundButton.length; i++) {
	soundButton[i].addEventListener("transitionend", soundFinished);
}

window.addEventListener("keydown", playSound);