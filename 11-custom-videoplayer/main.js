/**
 * JP BEHRENS - (jpbehrens.de@gmail.com)
 * Javascript DEV TOOLS
 */

// ## Custom Videoplayer

// Get Elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.player__fullscreen');

// Funtionktions

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method](); // Interessant 
}

function updateButton() {
  const icon = video.paused ? 'Play' : 'Pause';
  toggle.innerHTML = `${icon}`;
}

function skip() {
  console.log(video.currentTime);
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handelRangeUpdate() {
  video[this.name] = this.value;
  console.log(this.value);
}

function handleProgress() {
  const procent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${procent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function timeUpdate(e) {

  function toHHMMSS(secs) {
    let sec_num = parseInt(secs, 10)
    let hours = Math.floor(sec_num / 3600) % 24
    let minutes = Math.floor(sec_num / 60) % 60
    let seconds = sec_num % 60
    return [hours, minutes, seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v, i) => v !== "00" || i > 0)
      .join(":")
  }

  const now = toHHMMSS(video.currentTime);
  const end = toHHMMSS(video.duration);


  document.querySelector('.time').value =
    `${now} / ${end}`;
}


function openFullscreen() {
  if (player.requestFullscreen) {
    player.requestFullscreen();
  } else if (player.webkitRequestFullscreen) { /* Safari */
    player.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    player.msRequestFullscreen();
  }
}

// Hok up the eventListener

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('timeupdate', timeUpdate);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => {
  button.addEventListener('click', skip);
});

ranges.forEach(range => range.addEventListener('change', handelRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handelRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)
);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreen.addEventListener('click', openFullscreen);


// Snapshuss vom Video -> https://codepen.io/ganmahmud/pen/wMyopY
// Video Schneiden -> https://video-cutter-js.com/de/
// 