"use strict";

const hamburger = document.querySelector(".js-hamburger");
const navList = document.querySelector(".js-nav-list");
const active = "active";

hamburger.addEventListener("click", () => {
  navList.classList.toggle(active);
  hamburger.classList.toggle(active);
});
