"use strict";
document.addEventListener('click', playAudio);
document.addEventListener('click',playVideo);

function playAudio(){
	document.getElementById('audio').play();
	document.removeEventListener('click',playAudio);
}

function playVideo(){
	document.getElementById('video').play();
	document.removeEventListener('click',playVideo);
}