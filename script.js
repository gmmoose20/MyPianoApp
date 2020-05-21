// gets all the element class key
const keys = document.querySelectorAll(".key");

//add  eventlistener and playsound function for each key
keys.forEach((key) => {
	key.addEventListener("click", () => playSound(key));
});

//gets the element dataset which is note
function playSound(key) {
	const soundAudio = document.getElementById(key.dataset.note);
	soundAudio.currentTime = 0;
	soundAudio.play();
}
