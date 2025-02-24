//nav toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});

// Header scrolling effect
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");
  const navLogo = document.querySelector(".nav-logo"); // Select the logo element

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      navLogo.src = "img/mandala2.png"; // Change to the scrolled logo
    } else {
      header.classList.remove("scrolled");
      navLogo.src = "img/mandala1.png"; // Change back to the default logo
    }
  });
});

//hero parallax scrolling effect

document.addEventListener("DOMContentLoaded", function () {
  var heroImg = document.querySelector(".hero-img");
  var overlay = document.querySelector(".overlay");

  function updateEffects() {
    var scrollPos = window.scrollY;

    // Parallax effect
    heroImg.style.transform = "translateY(" + scrollPos * 0.4 + "px)";

    // Darken overlay but limit intensity to keep the curve visible
    var darkenAmount = Math.min(
      Math.pow(scrollPos / (heroImg.clientHeight / 2), 2),
      0.3
    );
    overlay.style.backgroundColor = "rgba(0, 0, 0, " + darkenAmount + ")";
  }

  updateEffects();
  window.addEventListener("scroll", updateEffects);
});

//Crystal parallax scrolling effect

document.addEventListener("DOMContentLoaded", function () {
  var CrystalsImg = document.querySelector(".crystals-img");
  var crystalsOverlay = document.querySelector(".crystals-overlay");

  // Function to update parallax and darkening effects
  function updateEffects() {
    var scrollPos = window.scrollY;

    // Parallax effect
    heroImg.style.transform = "translateY(" + scrollPos * 0.4 + "px)";
  }
});

// h1 animation, main title and mandala fade in

document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero__text h1");
  const mandalaHero = document.querySelector(".mandala-hero");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        heroTitle.style.animation = "fadeIn 2s ease-in forwards";
        mandalaHero.style.animation = "fadeIn 1s ease-in forwards";
        mandalaHero.style.animationDelay = "1s"; // Add delay dynamically
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(document.querySelector(".hero"));
});

//testimonials swiper

const swiper = new Swiper(".js-testimonials-slider", {
  grabCursor: true,
  spaceBetween: 30, // Adjust this value if needed
  slidesPerView: 1, // Default number of slides
  loop: true, // Infinite scrolling
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, // Pauses autoplay on hover
  },
  pagination: {
    el: ".js-testimonials-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1, // Show only one testimonial on tablet
    },
    1100: {
      slidesPerView: 2, // Ensure full 2 slides
      spaceBetween: 40, // Reduce space to fit better
    },
  },
});
