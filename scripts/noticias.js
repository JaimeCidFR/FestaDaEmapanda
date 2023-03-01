const noticias = [
  {
    id: 0,
    titular: "Una Empanada de cine",
    src: "../img/noticias/docu.jpg",
    fecha: "16/10/22",
    url: "https://www.farodevigo.es/deza-tabeiros-montes/2022/10/16/empanada-cine-77294007.html",
  },
  {
    id: 1,
    titular: "La Empanada dejó un superávit de 6.000 euros en esta edición.",
    src: "../img/noticias/asamblea.jfif",
    fecha: "18/09/22",
    url: "https://venagalicia.gal/noticia/2022/09/18/empanada-dejo-superavit-6000-euros-edicion/0003_202209D18C7992.htms",
  },
  {
    id: 2,
    titular:
      "A Bandeira cierra sus fiestas de verano con mucha actividad en las calles",
    src: "../img/noticias/cierreFiestas.jpg",
    fecha: "22/08/22",
    url: "https://www.farodevigo.es/deza-tabeiros-montes/2022/08/22/bandeira-cierra-fiestas-verano-actividad-73756722.html",
  },
  {
    id: 3,
    titular:
      "Fernando Ónega y Pepe Domingo Castaño son los nuevos valedores de la empanada",
    src: "../img/noticias/onegaCastañoValedores.jpg",
    fecha: "17/08/22",
    url: "https://www.farodevigo.es/deza-tabeiros-montes/2022/08/17/empanada-mediatica-73617477.html?fbclid=IwAR172irqcZMjjcwLKVhg_dBGy_Z_5vlRVpj02Rs6ee7BYzB2EriU3ouEZ0c",
  },
  {
    id: 4,
    titular: "Alfonso Rueda será declarado valedor da Festa da Empanada.",
    src: "../img/noticias/noticiaRueda.jpg",
    fecha: "30/07/22",
    url: "https://www.lavozdegalicia.es/noticia/deza/2022/07/30/empanada-ficha-embajador-casa/0003_202207D30C3993.htm",
  },
  {
    id: 5,
    titular:
      "La chef Lucía Freitas pregonará la Festa da Empanada da Bandeira.",
    src: "../img/noticias/presentacion.png",
    fecha: "23/07/22",
    url: "https://www.lavozdegalicia.es/noticia/deza/2022/07/23/chef-lucia-freitas-pregonara-festa-da-empanada-da-bandeira/0003_202207D23C4991.htm",
  },
];
const $d = document,
  $next = $d.querySelector(".nextNot"),
  $prev = $d.querySelector(".prevNot"),
  $img = $d.querySelector(".foto"),
  $titular = $d.querySelector(".titular"),
  $fecha = $d.querySelector(".fecha"),
  $noticia = $d.querySelector(".enlaceNoticia"),
  $imgPrev = $d.querySelector(".fotoPrev"),
  $titularPrev = $d.querySelector(".titularPrev"),
  $fechaPrev = $d.querySelector(".fechaPrev"),
  $noticiaPrev = $d.querySelector(".enlaceNoticiaPrev"),
  $imgNext = $d.querySelector(".fotoNext"),
  $titularNext = $d.querySelector(".titularNext"),
  $fechaNext = $d.querySelector(".fechaNext"),
  $noticiaNext = $d.querySelector(".enlaceNoticiaNext"),
  $articuloCentro = $d.querySelector(".ArtCentro"),
  $articuloDer = $d.querySelector(".ArtDer"),
  $articuloIzq = $d.querySelector(".ArtIzq");

let cont = 0;

const articuloDesplazamientoDer = [
  { transform: " translateX(0px)" },
  { transform: " translateX(500px)" },
];
const articuloDesplazamientoIzq = [
  { transform: " translateX(0px)" },
  { transform: " translateX(-500px)" },
];
const articuloTiempo = {
  duration: 250,
  iterations: 1,
};

function render(cont) {
  $img.src = noticias[cont].src;
  $titular.innerHTML = noticias[cont].titular;
  $fecha.innerHTML = noticias[cont].fecha;
  $noticia.href = noticias[cont].url;
}
function renderPrev(cont) {
  if (cont < 0) {
    cont = noticias.length - 1;
  }

  $imgPrev.src = noticias[cont].src;
  $titularPrev.innerHTML = noticias[cont].titular;
  $fechaPrev.innerHTML = noticias[cont].fecha;
  $noticiaPrev.href = noticias[cont].url;
}
function renderNext(cont) {
  if (cont == noticias.length) {
    cont = 0;
  }
  $imgNext.src = noticias[cont].src;
  $titularNext.innerHTML = noticias[cont].titular;
  $fechaNext.innerHTML = noticias[cont].fecha;
  $noticiaNext.href = noticias[cont].url;
}
window.addEventListener("load", (e) => {
  renderPrev(5);
  render(0);
  renderNext(1);
});

$prev.addEventListener("click", (e) => {
  $articuloCentro.animate(articuloDesplazamientoIzq, articuloTiempo);
  $articuloDer.animate(articuloDesplazamientoIzq, articuloTiempo);
  $articuloIzq.animate(articuloDesplazamientoIzq, articuloTiempo);
  cont++;
  if (cont >= noticias.length) {
    cont = 0;
  }

  setTimeout(renderPrev, 250, cont - 1);
  setTimeout(render, 250, cont);
  setTimeout(renderNext, 250, cont + 1);

  /*   renderPrev(cont - 1);
  render(cont);
  renderNext(cont + 1); */
});
$next.addEventListener("click", (e) => {
  $articuloCentro.animate(articuloDesplazamientoDer, articuloTiempo);
  $articuloDer.animate(articuloDesplazamientoDer, articuloTiempo);
  $articuloIzq.animate(articuloDesplazamientoDer, articuloTiempo);
  cont--;
  if (cont < 0) {
    cont = noticias.length - 1;
  }
  setTimeout(renderPrev, 250, cont - 1);
  setTimeout(render, 250, cont);
  setTimeout(renderNext, 250, cont + 1);

  /*   renderPrev(cont - 1);
  render(cont);
  renderNext(cont + 1); */
});
