const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const navALink = document.querySelector(".nav-a-link");

  burger.addEventListener("click", () => {
    // toggle animacion en burguer
    nav.classList.toggle("nav-active");
    //animacion de links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
      }
    });
    //animacion para burger
    burger.classList.toggle("toggle");
  });
};
navSlide();
