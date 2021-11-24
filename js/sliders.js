//slider sierras
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("img_slider");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
//slider cascadas

var slideIndexCasc = 1;
showDivsCasc(slideIndexCasc);

function plusDivsCasc(n) {
  showDivsCasc(slideIndexCasc += n);
}

function showDivsCasc(n) {
  var i;
  var x = document.getElementsByClassName("img_slider_cascadas");
  if (n > x.length) {slideIndexCasc = 1}
  if (n < 1) {slideIndexCasc = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexCasc-1].style.display = "block";
}
//slider espejos

var slideIndexEsp = 1;
showDivsEsp(slideIndexEsp);

function plusDivsEsp(n) {
  showDivsEsp(slideIndexEsp += n);
}

function showDivsEsp(n) {
  var i;
  var x = document.getElementsByClassName("img_slider_espejos");
  if (n > x.length) {slideIndexEsp = 1}
  if (n < 1) {slideIndexEsp = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexEsp-1].style.display = "block";
}
//slider salinas

var slideIndexSal = 1;
showDivsSal(slideIndexSal);

function plusDivsSal(n) {
  showDivsSal(slideIndexSal += n);
}

function showDivsSal(n) {
  var i;
  var x = document.getElementsByClassName("img_slider_salinas");
  if (n > x.length) {slideIndexSal = 1}
  if (n < 1) {slideIndexSal = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexSal-1].style.display = "block";
}
//slider quijadas

var slideIndexQuij = 1;
showDivsQuij(slideIndexQuij);

function plusDivsQuij(n) {
  showDivsQuij(slideIndexQuij += n);
}

function showDivsQuij(n) {
  var i;
  var x = document.getElementsByClassName("img_slider_quijadas");
  if (n > x.length) {slideIndexQuij = 1}
  if (n < 1) {slideIndexQuij = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexQuij-1].style.display = "block";
}
//slider playa

var slideIndexPlaya = 1;
showDivsPlaya(slideIndexPlaya);

function plusDivsPlaya(n) {
  showDivsPlaya(slideIndexPlaya += n);
}

function showDivsPlaya(n) {
  var i;
  var x = document.getElementsByClassName("img_slider_playa");
  if (n > x.length) {slideIndexPlaya = 1}
  if (n < 1) {slideIndexPlaya = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexPlaya-1].style.display = "block";
}
//slider arquitectura

var slideIndexArq = 1;
showDivsArq(slideIndexArq);

function plusDivsArq(n) {
  showDivsArq(slideIndexArq += n);
}

function showDivsArq(n) {
  var i;
  var x = document.getElementsByClassName("img_slider_arqui");
  if (n > x.length) {slideIndexArq = 1}
  if (n < 1) {slideIndexArq = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexArq-1].style.display = "block";
}
//slider flora+fauna

var slideIndexFlora = 1;
showDivsFlora(slideIndexFlora);

function plusDivsFlora(n) {
  showDivsFlora(slideIndexFlora += n);
}

function showDivsFlora(n) {
  var i;
  var x = document.getElementsByClassName("img_slider_flora");
  if (n > x.length) {slideIndexFlora = 1}
  if (n < 1) {slideIndexFlora = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexFlora-1].style.display = "block";
}
//slider comida

var slideIndexComida = 1;
showDivsComida(slideIndexComida);

function plusDivsComida(n) {
  showDivsComida(slideIndexComida += n);
}

function showDivsComida(n) {
  var i;
  var x = document.getElementsByClassName("img_slider_comida");
  if (n > x.length) {slideIndexComida = 1}
  if (n < 1) {slideIndexComida = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexComida-1].style.display = "block";
}
