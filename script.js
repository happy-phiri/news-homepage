const toggler = document.querySelector("#toggle");
const navLinks = document.querySelector(".nav-links");
const menuButton = document.querySelector(".menu");

toggler.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    menuButton.setAttribute("src", "/assets/images/icon-menu-close.svg");
  } else {
    menuButton.setAttribute("src", "/assets/images/icon-menu.svg");
  }
});
