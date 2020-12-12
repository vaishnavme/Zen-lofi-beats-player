const controlButton = document.querySelector("#play-stop");
const circleBig = document.querySelector("#circle-bg");
const circleSm = document.querySelector("#circle-sm");
// control button images
let playImg = "./assets/images/play.svg";
let pauseImg = "./assets/images/pause.svg";
// default control image
controlButton.src = playImg;

let musicSrc = "./assets/music/Lofi1.mp3"
// player event 
controlButton.addEventListener("click", playHandler);

let isPlaying = true;

function play() {
    controlButton.src = pauseImg;
    circleBig.classList.add("animate");
    circleSm.classList.add("animate");
}

function pause() {
    controlButton.src = playImg;
    circleBig.classList.remove("animate");
    circleSm.classList.remove("animate");
}

function playHandler() {
    isPlaying = !isPlaying;
    console.log(isPlaying)
    isPlaying ? pause() : play();
}