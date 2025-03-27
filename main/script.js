let song = document.getElementById("song");
let playBtn = document.getElementById("play-btn");
let progress = document.getElementById("progress");
function playPause() {
  if (song.paused) {
    song.play();
    updatePlayButton(true);
  } else {
    song.pause();
    updatePlayButton(false);
  }
}
function updatePlayButton(isPlaying) {
  if (isPlaying) {
    playBtn.innerHTML = `<svg class="w-6 h-8" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48s48-21.5 48-48V112c0-26.5-21.5-48-48-48zm224 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48s48-21.5 48-48V112c0-26.5-21.5-48-48-48z"/>
      </svg>`;
  } else {
    playBtn.innerHTML = `<svg class="w-6 h-8" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
      </svg>`;
  }
}
song.addEventListener("timeupdate", () => {
  if (!isNaN(song.duration)) {
    progress.max = song.duration;
    progress.value = song.currentTime;
  }
});
progress.addEventListener("input", () => {
  song.currentTime = progress.value;
  song.play();
  updatePlayButton(true); 
});
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    playPause();
  }
});
