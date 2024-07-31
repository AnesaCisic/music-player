const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

const playPause = () => {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.replace("fa-pause", "fa-play");
  } else {
    song.play();
    ctrlIcon.classList.replace("fa-play", "fa-pause");
  }
};

song.addEventListener("play", () => {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 400);
});

progress.onchange = () => {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.replace("fa-play", "fa-pause");
};

song.addEventListener("ended", () => {
  progress.value = progress.max;
  ctrlIcon.classList.replace("fa-pause", "fa-play");
});
