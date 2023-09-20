"use strict";

const active = "active";
const black = "black";
const originalBackgroundColor = "";

function toggleScroll(disable) {
  document.body.style.overflow = disable ? "hidden" : "visible";
}

function scrollToSection(targetClass) {
  const targetSection = document.querySelector(`.${targetClass}`);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
}
function posaljiMejl() {
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value;

  if (email) {
    const url = `mailto:telefoncash407@gmail.com?subject=Novi mejl&body=${email}`;
    window.location.href = url;
  } else {
    alert("Unesite Vašu poruku!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".js-hamburger");
  const navList = document.querySelector(".js-nav-list");
  const navLinks = document.querySelectorAll(".js-nav-link");

  function handleHamburgerClick() {
    const header = document.querySelector(".js-header");
    header.style.transition = "background-color 0.8s";
    header.style.backgroundColor =
      header.style.backgroundColor === black ? originalBackgroundColor : black;

    navList.classList.toggle(active);
    hamburger.classList.toggle(active);

    if (navList.classList.contains(active)) {
      toggleScroll(true);
    } else {
      toggleScroll(false);
    }

    setTimeout(() => {
      header.style.transition = "";
    }, 600);
  }

  hamburger.addEventListener("click", handleHamburgerClick);

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetClass = link.getAttribute("href").substring(1);
      scrollToSection(targetClass);
      navList.classList.remove(active);
      hamburger.classList.remove(active);
      toggleScroll(false);

      setTimeout(() => {
        const header = document.querySelector(".js-header");
        header.style.transition = "background-color 0.8s";
        header.style.backgroundColor = originalBackgroundColor;
        setTimeout(() => {
          header.style.transition = "";
        }, 800);
      }, 10);
    });
  });

  document
    .getElementById("sendEmailButton")
    .addEventListener("click", posaljiMejl);
});
