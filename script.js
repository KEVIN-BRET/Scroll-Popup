// On ne pointera pas les éléments du HTML,
// on utilisera directement leur id.

// Changer l'épaisseur de la navbar au scroll :
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.height = "40px";
  } else {
    navbar.style.height = "90px";
  }
});

// Faire apparaitre l'image de la partie improvise :
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "translateX(0px)";
  }
});

// Faire apparaitre la popup quand on est en bas du site :
window.addEventListener("scroll", () => {
  // Si on scroll jusqu'en bas de la page :
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    popup.style.opacity = 1;
    popup.style.transform = "translateX(0px)";
  }
});

// Bonus : quand on clicke sur la popup elle disparait pour toujours :
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
