const siteHeader = document.getElementById("siteHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    siteHeader.classList.add("compact");
  } else {
    siteHeader.classList.remove("compact");
  }
});