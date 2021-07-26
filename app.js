const hamburgerMenu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const navbar2 = document.querySelector(".navbar-two");
const list = document.querySelector(".list");

let showMenu = false;

hamburgerMenu.addEventListener("click", () => {
  console.log(showMenu);
  if (!showMenu) {
    navbar.classList.add("open-color");
    list.classList.add("open");
    navbar2.classList.add("open");
    showMenu = true;
  } else {
    navbar.classList.remove("open-color");
    list.classList.remove("open");
    navbar2.classList.remove("open");
    showMenu = false;
  }
});
