"use strict";

const navBtn = document.querySelector(".btn-mobile-nav");
const mainNav = document.querySelector(".main-nav");

navBtn.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

// year

const year = new Date().getFullYear();
const fullYear = document.querySelector(".fullYear");
fullYear.textContent = year;

// section scroll

const navigation = document.querySelector(".navigation");

const sectionHow = document.querySelector(".how-section");
const sectionMeal = document.querySelector(".section-meals");
const sectionTesto = document.querySelector(".section-testomonials");
const sectionPrice = document.querySelector(".section-pricing");

navigation.addEventListener("click", (e) => {
  e.preventDefault();
  // if (!e.target.dataset.number) return;

  console.log(e.target);

  const navNumber = e.target.getAttribute("data-number");

  switch (Number(navNumber)) {
    case 1:
      sectionHow.scrollIntoView({ behavior: "smooth" });
      mainNav.classList.remove("active");

      break;

    case 2:
      sectionMeal.scrollIntoView({ behavior: "smooth" });
      mainNav.classList.remove("active");

      break;
    case 3:
      sectionTesto.scrollIntoView({ behavior: "smooth" });
      mainNav.classList.remove("active");

      break;
    case 4:
      sectionPrice.scrollIntoView({ behavior: "smooth" });
      mainNav.classList.remove("active");

      break;
  }
});

// ///sticky nav
const sectionHero = document.querySelector(".section-hero");
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "",
});

observer.observe(sectionHero);
