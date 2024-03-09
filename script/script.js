const rootElement = document.querySelector(":root");
const haris = document.querySelector("#hari");
const jams = document.querySelector("#jam");
const menits = document.querySelector("#menit");
const detiks = document.querySelector("#detik");

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
}
disableScroll(); // Panggil fungsi untuk menonaktifkan scroll

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
