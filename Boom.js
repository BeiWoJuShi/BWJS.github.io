console.log('Boom.js in');

var image = document.getElementById("myImage");

function start() {
    image.src = "ը��.gif";
    }

		

var music = document.getElementById("music");

function playMusic() {
	if (music.paused) {
				music.play();
	} else {
				music.pause();
	}
}