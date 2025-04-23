function openSite() {
  window.open("https://drive.google.com", "_self");
}

document.addEventListener("keydown", function(event) {
  if (event.key === "`") { (`)
    openSite();
  }
});
