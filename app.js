const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: ` I was having a hard time understanding Mathematics in school. No
                matter how long my teacher tries to explain, I couldn’t get and
                I became ashamed of speaking up in class when I don’t
                understand. With A1tutor, I can learn on my own with simplified
                notes for the complex equations and explanatory videos that made
                mathematics fun. I made a B+ in my WAEC.`,
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: ` I was having a hard time understanding Mathematics in school. No
                matter how long my teacher tries to explain, I couldn’t get and
                I became ashamed of speaking up in class when I don’t
                understand. With A1tutor, I can learn on my own with simplified
                notes for the complex equations and explanatory videos that made
                mathematics fun. I made a B+ in my WAEC.`,
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: ` I was having a hard time understanding Mathematics in school. No
                matter how long my teacher tries to explain, I couldn’t get and
                I became ashamed of speaking up in class when I don’t
                understand. With A1tutor, I can learn on my own with simplified
                notes for the complex equations and explanatory videos that made
                mathematics fun. I made a B+ in my WAEC.`,
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: ` I was having a hard time understanding Mathematics in school. No
                matter how long my teacher tries to explain, I couldn’t get and
                I became ashamed of speaking up in class when I don’t
                understand. With A1tutor, I can learn on my own with simplified
                notes for the complex equations and explanatory videos that made
                mathematics fun. I made a B+ in my WAEC.`,
  },
];

const hamburgerMenu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const navbar2 = document.querySelector(".navbar-two");
const list = document.querySelector(".list");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const personName = document.querySelector(".person-name");
const personLevel = document.querySelector(".person-level");
const personImage = document.querySelector(".person-image");
const info = document.querySelector(".testimonial-text");
const dots = document.querySelectorAll(".dot");
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");
const dot4 = document.querySelector(".dot4");

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

// set starting item
let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  personImage.src = item.img;
  personName.textContent = item.name;
  personLevel.textContent = item.job;
  info.textContent = item.text;
});
function showPerson(person) {
  const item = reviews[person];
  personImage.src = item.img;
  personName.textContent = item.name;
  personLevel.textContent = item.job;
  info.textContent = item.text;
}
// show next person
rightBtn.addEventListener("click", function () {
  console.log("hello");
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
leftBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

dot1.addEventListener("click", () => {
  showPerson(0);
});
dot2.addEventListener("click", () => {
  showPerson(1);
});
dot3.addEventListener("click", () => {
  showPerson(2);
});
dot4.addEventListener("click", () => {
  showPerson(3);
});
