const hamburgerMenu = document.querySelector(".menu");
const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const navbar2 = document.querySelector(".navbar-two");
const list = document.querySelector(".list");
const signin = document.querySelector(".signin");
const logo = document.querySelector(".logo");

let showMenu = false;

const swiper = new Swiper(".swiper", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    loop: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Selector
const counters = document.querySelectorAll(".counter");
// Main function
for (let n of counters) {
  const updateCount = () => {
    const target = +n.getAttribute("data-target");
    const count = +n.innerText;
    const speed = 500; // change animation speed here
    const inc = target / speed;
    if (count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  };
  updateCount();
}

hamburgerMenu.addEventListener("click", () => {
  if (!showMenu) {
    header.classList.add("open-header");
    logo.classList.add("open-logo");
    navbar.classList.add("open-color");
    list.classList.add("open");
    navbar2.classList.add("open");
    showMenu = true;
  } else {
    header.classList.remove("open-header");
    logo.classList.remove("open-logo");
    navbar.classList.remove("open-color");
    list.classList.remove("open");
    navbar2.classList.remove("open");
    showMenu = false;
  }
});

let questions = document.getElementsByClassName("question");
for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    questions[i].classList.toggle("active");
    let answer = questions[i].nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}

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
