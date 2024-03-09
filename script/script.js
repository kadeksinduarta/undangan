const rootElement = document.querySelector(":root");

function disableScroll() {
  // Simpan posisi scroll saat ini
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // Matikan event scroll
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);

    rootElement.style.scrollBehavior = "auto";
  };
}

function ableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
}
disableScroll(); // Panggil fungsi untuk menonaktifkan scroll
