const navMenu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

navMenu.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
