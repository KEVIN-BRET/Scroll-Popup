// On ne pointera pas les éléments du HTML,
// on utilisera directement leur id.

// Pour afficher la popup une fois :
let playOnce = true;

// Evenement au scroll :
window.addEventListener("scroll", () => {
  // Navbar :
  if (window.scrollY > 0) {
    navbar.style.height = "40px";
  } else {
    navbar.style.height = "90px";
  }

  // On garde la valeur du scroll en % :
  let scrollValue =
    (window.innerHeight + window.scrollY) / document.body.offsetHeight;
  //
  console.log(scrollValue);

  // Image :
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "translateX(0px)";
  }

  // Popup :
  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "translateX(0px)";
    playOnce = false;
  }
});

// Bonus : au click sur la popup elle disparait pour toujours :
closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});
