"use strict";

const burgerIcon = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu");
const burgerClose = document.querySelector(".burger-close");
const burgerList = document.querySelectorAll(".burger-menu-nav a");

function dissapear() {
  if (burgerMenu.classList.contains("active")) {
    burgerIcon.style.display = "none";
    burgerClose.style.display = "block";
  } else {
    burgerIcon.style.display = "block";
    burgerClose.style.display = "none";
  }
}

burgerIcon.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  document.body.classList.remove("no-scroll");
  dissapear();
});

burgerClose.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  dissapear();
});

burgerList.forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    dissapear();
  });
});
