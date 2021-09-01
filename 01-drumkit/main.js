/**
 * JP BEHRENS - (jpbehrens.de@gmail.com)
 * Javascript Drumkit
 */

function playsoundKeyboard(e) {
  playAudio(e.keyCode);
}

function playsoundClick(e) {
  playAudio(this.dataset.key);
}

function noAudioFile(e) {
  alert(String.fromCharCode(e));
}

function errorMsg() {}

function playAudio(keyCode) {
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) {
    noAudioFile(keyCode);
    return; // Stoppt die Funtion
  } 
  else {
    audio.currentTime = 0; // setzt das audio wieder an den Anfang um nicht warten zu müssen das es durch spiel
    audio.play();
    key.classList.add("playing");
  }
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

keys.forEach((key) => key.addEventListener("click", playsoundClick));

window.addEventListener("keydown", playsoundKeyboard);
