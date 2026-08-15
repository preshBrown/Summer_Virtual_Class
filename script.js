/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.15
  }
);


revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("#header-con nav");

menuButton.addEventListener("click", () => {

  nav.classList.toggle("active");

});


/* Close mobile menu when link is clicked */

const navLinks = document.querySelectorAll(".item a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

  });

});


/* =========================================================
   FORM
========================================================= */

const form = document.querySelector(".message-form");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const button = form.querySelector("button");

  button.textContent = "Message Sent ✓";

  button.style.background = "#fff";

  setTimeout(() => {

    button.textContent = "Send Message →";

  }, 3000);

});
