// MENU RESPONSIVE
var btnMenuOpen = document.getElementById("btnMenuOpen"),
  btnMenuClose = document.getElementById("btnMenuClose"),
  menuResponsive = document.getElementById("menuBar"),
  enlaces = document.getElementById("enlaces");

// Click abrir
btnMenuOpen.addEventListener("click", function () {
  menuResponsive.classList.add("active");
});

// Click cerrar
btnMenuClose.addEventListener("click", function () {
  menuResponsive.classList.remove("active");
});

// Cerrar menu con elementos de enlace
enlaces.addEventListener("click", function () {
  menuResponsive.style.transitionDelay = "0.5s";
  menuResponsive.classList.remove("active");
});

// BOTON SCROLL TOP
var btnTop = document.getElementById("btn-top"),
  logo = document.getElementById("logo");

// DETECTAMOS SCROLL EN NUESTRA PAGINA WEB
window.addEventListener("scroll", function () {
  var scroll = document.documentElement.scrollTop,
    fullSize = document.documentElement.offsetHeight,
    sizeVP = document.documentElement.clientHeight;

  if (scroll > 100) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }

  // MODIFICAR ELEMENTO CUANDO LLEGUE A FINAL DE PAGINA
  if (fullSize == scroll + sizeVP) {
    btnTop.classList.remove("scrollFinal");
  } else {
    btnTop.classList.add("scrollFinal");
  }
});

// DETECTAMOS EVENTO CLICK EN EL BOTON
btnTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// DETECTAR EVENTO CLIC EN EL LOGO
logo.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// visible / invisible parrafo seccion servicios.

// let titulo = document.querySelectorAll(".titulo");
// titulo.forEach((elemento) => {
//   elemento.addEventListener("mouseover", () => {
//     let parrafo = [...document.querySelectorAll(".parrafo")];

//     parrafo.map((p) => p.classList.replace("invisible", "visible"));
//   });
//   elemento.addEventListener("mouseout", () => {
//     let parrafo = [...document.querySelectorAll(".parrafo")];
//     parrafo.map((p) => p.classList.replace("visible", "invisible"));
//   });
// });
