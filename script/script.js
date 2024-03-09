const rootElement = document.querySelector(":root");
const backgroundMusic = document.getElementById("backgroundMusic");
const iconAudio = document.querySelector(".icon-audio");
const iconn = document.querySelector(".con-audios");
let isPlaying = false;

function disableScroll() {
  // Simpan posisi scroll saat ini
  document.body.style.overflow = "auto";
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // Matikan event scroll
  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);

    rootElement.style.scrollBehavior = "auto";
  };
}

function ableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  backgroundMusic.play();
  isPlaying = true;
  iconAudio.style.display = "block";
}

disableScroll(); // Panggil fungsi untuk menonaktifkan scroll

// audio on off
function audioPlayAndPause() {
  if (isPlaying) {
    backgroundMusic.pause();
    // iconn.src = "../gbr/audio-off";
  } else {
    backgroundMusic.play();
  }

  isPlaying = !isPlaying;
}

// nama tamu
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Fungsi untuk menampilkan nilai parameter di halaman
function displayParameter() {
  // Mendapatkan nilai parameter 'untuk' dari URL
  var parameterValue = getParameterByName("untuk");

  // Menampilkan nilai parameter di elemen dengan ID 'untuk'
  var hasilElement = document.getElementById("untuk");
  if (parameterValue !== null) {
    hasilElement.textContent = parameterValue;
  } else {
    hasilElement.textContent = "-";
  }
}

// Panggil fungsi displayParameter ketika halaman dimuat
window.onload = displayParameter;
