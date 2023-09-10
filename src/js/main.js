"use strict";

const hamburger = document.querySelector(".js-hamburger");
const navList = document.querySelector(".js-nav-list");
const active = "active";
let scrollDisabled = false;

function toggleScroll() {
  if (scrollDisabled) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  scrollDisabled = !scrollDisabled;
}

hamburger.addEventListener("click", () => {
  navList.classList.toggle(active);
  hamburger.classList.toggle(active);
  toggleScroll();
});
