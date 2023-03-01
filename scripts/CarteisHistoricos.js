const noticias = [
  {src:"../../img/galeria/historicos/1977.JPG", ano: 1977},
  {src:"../../img/galeria/historicos/1978.jpg", ano: 1978},
  {src:"../../img/galeria/historicos/1979.jpg", ano: 1979},
  {src:"../../img/galeria/historicos/1980.jpg", ano: 1980},
  {src:"../../img/galeria/historicos/1981.jpg", ano: 1981},
  {src:"../../img/galeria/historicos/1982.jpg", ano: 1982},
  {src:"../../img/galeria/historicos/1983.jpg", ano: 1983},
  {src:"../../img/galeria/historicos/1984.jpg", ano: 1984},
  {src:"../../img/galeria/historicos/1985.jpg", ano: 1985},
  {src:"../../img/galeria/historicos/1986.jpg", ano: 1986},
  {src:"../../img/galeria/historicos/1987.jpg", ano: 1987},
  {src:"../../img/galeria/historicos/1988.jpg", ano: 1988},
  {src:"../../img/galeria/historicos/1989.jpg", ano: 1989},
  {src:"../../img/galeria/historicos/1990.jpg", ano: 1990},
  {src:"../../img/galeria/historicos/1991.jpg", ano: 1991},
  {src:"../../img/galeria/historicos/1992.jpg", ano: 1992},
  {src:"../../img/galeria/historicos/1993.jpg", ano: 1993},
  {src:"../../img/galeria/historicos/1994.jpg", ano: 1994},
  {src:"../../img/galeria/historicos/1995.jpg", ano: 1995},
  {src:"../../img/galeria/historicos/1996.jpg", ano: 1996},
  {src:"../../img/galeria/historicos/1997.jpg", ano: 1997},
  {src:"../../img/galeria/historicos/1998.jpg", ano: 1998},
  {src:"../../img/galeria/historicos/1999.jpg", ano: 1999},
  {src:"../../img/galeria/historicos/2000.jpg", ano: 2000},
  {src:"../../img/galeria/historicos/2001.jpg", ano: 2001},
  {src:"../../img/galeria/historicos/2002.jpg", ano: 2002},
  {src:"../../img/galeria/historicos/2003.jpg", ano: 2003},
  {src:"../../img/galeria/historicos/2004.jpg", ano: 2004},
  {src:"../../img/galeria/historicos/2005.jpg", ano: 2005},
  {src:"../../img/galeria/historicos/2006.jpg", ano: 2006},
  {src:"../../img/galeria/historicos/2007.jpg", ano: 2007},
  {src:"../../img/galeria/historicos/2008.jpg", ano: 2008},
  {src:"../../img/galeria/historicos/2009.jpg", ano: 2009},
  {src:"../../img/galeria/historicos/2010.jpg", ano: 2010},
  {src:"../../img/galeria/historicos/2011.jpg", ano: 2011},
  {src:"../../img/galeria/historicos/2012.jpg", ano: 2012},
  {src:"../../img/galeria/historicos/2013.jpg", ano: 2013},
  {src:"../../img/galeria/historicos/2014.jpg", ano: 2014},
  {src:"../../img/galeria/historicos/2015.jpg", ano: 2015},
  {src:"../../img/galeria/historicos/2016.jpg", ano: 2016},
  {src:"../../img/galeria/historicos/2017.jpg", ano: 2017},
  {src:"../../img/galeria/historicos/2018.jpg", ano: 2018},
  {src:"../../img/galeria/historicos/2019.jpg", ano: 2019},
  {src:"../../img/galeria/historicos/suspendido.jpg", ano: 2020},
  {src:"../../img/galeria/historicos/suspendido.jpg", ano: 2021},
  {src:"../../img/galeria/historicos/2022.jpg", ano: 2022}
               
];
const $d = document,
  $next = $d.querySelector(".nextNot"),
  $prev = $d.querySelector(".prevNot"),
  $img = $d.querySelector(".foto"),
  $titular = $d.querySelector(".titular"),
 
  $imgPrev = $d.querySelector(".fotoPrev"),
  $titularPrev = $d.querySelector(".titularPrev"),
 
  $imgNext = $d.querySelector(".fotoNext"),
  $titularNext = $d.querySelector(".titularNext"),
  
  $articuloCentro = $d.querySelector(".ArtCentro"),
  $articuloDer = $d.querySelector(".ArtDer"),
  $articuloIzq = $d.querySelector(".ArtIzq"),

  $botonAno = $d.querySelector(".anos");

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
  $titular.innerHTML = noticias[cont].ano;
  
}
function renderPrev(cont) {
  if (cont < 0) {
    cont = noticias.length - 1;
  }

  $imgPrev.src = noticias[cont].src;
  $titularPrev.innerHTML = noticias[cont].ano;
  
}
function renderNext(cont) {
  if (cont == noticias.length) {
    cont = 0;
  }
  $imgNext.src = noticias[cont].src;
  $titularNext.innerHTML = noticias[cont].ano;
 
}
window.addEventListener("load", (e) => {
  renderPrev(45);
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


$botonAno.addEventListener("click",e=>{
   let id = e.target.id
   let prevId =id-1
   let nextId =parseInt(id)+1

   if (prevId < 0) {
    prevId = noticias.length - 1;
  }
  if (nextId >= noticias.length) {
    nextId = 0;
  }
    renderPrev(prevId);
    render(id);
    renderNext(nextId);
    cont = id
})