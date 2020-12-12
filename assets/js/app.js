const controlButton = document.querySelector("#play-stop");

const circleBig = document.querySelector("#circle-bg");
const circleSm = document.querySelector("#circle-sm");

const songName = document.querySelector("#song-name");
const audio = document.querySelector("#audio");

// control button images
let playImg = "./assets/images/play.svg";
let pauseImg = "./assets/images/pause.svg";
// default control image
controlButton.src = playImg;

const songList = [
    {
        name: "Travel Love Beats",
        source: "./assets/music/Lofi1.mp3",
        cover: "./assets/images/chillhop.jpg"
    },
    {
        name: "Night Sky Unreated",
        source: "./assets/music/Lofi2.mp3",
        cover: "./assets/images/chillhop-2.jpg"
    }
];

let index = 0;
// preloaded song
loadSong(songList[index]);

function loadSong() {
    songName.innerText = songList[index].name;
    audio.src = songList[index].source;
}
//default
let isPlaying = true;

function play() {
    controlButton.src = pauseImg;
    circleBig.classList.add("animate");
    circleSm.classList.add("animate");
    // play song
    audio.play();
}

function pause() {
    controlButton.src = playImg;
    circleBig.classList.remove("animate");
    circleSm.classList.remove("animate");

    // pause song
    audio.pause();
}

function playHandler() {
    isPlaying = !isPlaying;
    //console.log("Change: ",isPlaying)
    isPlaying ? pause() : play();
}


// player event 
controlButton.addEventListener("click", playHandler);
mBox.addEventListener("click", playAnySong);
coverArtHandler();