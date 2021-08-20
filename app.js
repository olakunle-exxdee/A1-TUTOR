const hamburgerMenu = document.querySelector(".menu");
const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const navbar2 = document.querySelector(".navbar-two");
const list = document.querySelector(".list");

let showMenu = false;

const swiper = new Swiper(".swiper-container", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    loop: true,
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

hamburgerMenu.addEventListener("click", () => {
  if (!showMenu) {
    header.classList.add("open-header");
    navbar.classList.add("open-color");
    list.classList.add("open");
    navbar2.classList.add("open");
    showMenu = true;
  } else {
    header.classList.remove("open-header");
    navbar.classList.remove("open-color");
    list.classList.remove("open");
    navbar2.classList.remove("open");
    showMenu = false;
  }
});

const objOptions = {
  root: null,
  threshold: 0.3,
  rootMargin: "-100px",
};

window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 500,
  distance: "10rem",
  easing: "ease-in",
  delay: 300,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 500,
  distance: "10rem",
  easing: "ease-in",
  delay: 300,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 500,
  distance: "10rem",
  easing: "ease-in",
  delay: 300,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 500,
  distance: "10rem",
  easing: "ease-in",
  delay: 300,
});

ScrollReveal().reveal(".sequenced", {
  interval: 1000,
});
