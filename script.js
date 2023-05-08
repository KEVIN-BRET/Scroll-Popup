// On ne pointera pas les éléments du HTML,
// on utilisera directement leur id.

// Changer l'épaisseur de la navbar au scroll :
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.height = "40px";
  } else {
    navbar.style.height = "90px";
  }
  console.log(window.scrollY);
});

// Faire apparaitre l'image de la partie improvise
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    imgImprovise.style.opacity = 1;
	imgImprovise.style.transform = "translateX(0px)";
  } 
});


// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
