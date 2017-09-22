var keys = [65, 83, 68, 70, 71, 72, 74, 75, 76];
var letters = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
var sounds = ["clap", "hihat", "kick", "openhat", "boom", "ride", "snare", "tom", "tink"];
var soundButton = document.querySelectorAll(".sound");

for (var i = 0; i < keys.length; i++) {
	createButtonElements("sound__key", letters[i], i);
	createButtonElements("sound__name", sounds[i], i);
}

function createButtonElements(elementClass, elementText, i) {
	var element = document.createElement("div");
	element.className = elementClass;
	element.textContent = elementText;
	soundButton[i].appendChild(element);
}

window.onkeydown = function(event) {
	var keyValue = event.keyCode;
	playSound(keyValue);
}

function playSound(keyValue) {
	var i = keys.indexOf(keyValue);
	if (i >= 0) {
		var audio = new Audio("sounds/" + sounds[i] + ".wav");
		audio.play();
		soundButton[i].classList.add("sound--glowing");
	}
}

for (var i = 0; i < soundButton.length; i++) {
	soundButton[i].addEventListener("transitionend", soundFinished);
}
function soundFinished(event) {
	event.target.classList.remove("sound--glowing");
}