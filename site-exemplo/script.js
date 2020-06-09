var navbar = document.querySelector('nav');
document.addEventListener("scroll", function() {
  var posicaoy = window.pageYOffset;
  console.log(posicaoy);
  navbar.style.backgroundColor = posicaoy == 0 ? "transparent" : "white";
  navbar.style.boxShadow = posicaoy == 0 ? "none" : "0px 0px 5px 0px rgba(0,0,0,0.3)";
});