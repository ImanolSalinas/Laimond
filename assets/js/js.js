const audio = document.getElementById("audio");
const playPause = document.getElementById("play");


const audio2 = document.getElementById("audio2");
const playPause2 = document.getElementById("play2");


const audio3 = document.getElementById("audio3");
const playPause3 = document.getElementById("play3");

const audio4 = document.getElementById("audio4");
const playPause4 = document.getElementById("play4");

const audio5 = document.getElementById("audio5");
const playPause5 = document.getElementById("play5");

const audio6 = document.getElementById("audio6");
const playPause6 = document.getElementById("play6");



playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});

playPause2.addEventListener("click", () => {
  if (audio2.paused || audio2.ended) {
    playPause2.querySelector(".pause-btn").classList.toggle("hide");
    playPause2.querySelector(".play-btn").classList.toggle("hide");
    audio2.play();
  } else {
    audio2.pause();
    playPause2.querySelector(".pause-btn").classList.toggle("hide");
    playPause2.querySelector(".play-btn").classList.toggle("hide");
  }
});

playPause3.addEventListener("click", () => {
  if (audio3.paused || audio3.ended) {
    playPause3.querySelector(".pause-btn").classList.toggle("hide");
    playPause3.querySelector(".play-btn").classList.toggle("hide");
    audio3.play();
  } else {
    audio3.pause();
    playPause3.querySelector(".pause-btn").classList.toggle("hide");
    playPause3.querySelector(".play-btn").classList.toggle("hide");
  }
});

playPause4.addEventListener("click", () => {
  if (audio4.paused || audio4.ended) {
    playPause4.querySelector(".pause-btn").classList.toggle("hide");
    playPause4.querySelector(".play-btn").classList.toggle("hide");
    audio4.play();
  } else {
    audio4.pause();
    playPause4.querySelector(".pause-btn").classList.toggle("hide");
    playPause4.querySelector(".play-btn").classList.toggle("hide");
  }
});

playPause5.addEventListener("click", () => {
  if (audio5.paused || audio5.ended) {
    playPause5.querySelector(".pause-btn").classList.toggle("hide");
    playPause5.querySelector(".play-btn").classList.toggle("hide");
    audio5.play();
  } else {
    audio5.pause();
    playPause5.querySelector(".pause-btn").classList.toggle("hide");
    playPause5.querySelector(".play-btn").classList.toggle("hide");
  }
});

playPause6.addEventListener("click", () => {
  if (audio6.paused || audio6.ended) {
    playPause6.querySelector(".pause-btn").classList.toggle("hide");
    playPause6.querySelector(".play-btn").classList.toggle("hide");
    audio6.play();
  } else {
    audio6.pause();
    playPause6.querySelector(".pause-btn").classList.toggle("hide");
    playPause6.querySelector(".play-btn").classList.toggle("hide");
  }
});