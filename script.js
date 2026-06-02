/*
  Project: Brian McCarthy Developer Portfolio
  Written by Brian McCarthy
*/

const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const projectImages = document.querySelectorAll(".project-image");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxClose = document.querySelector("#lightbox-close");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

function toggleMenu() {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

function closeMenu() {
  navMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function filterProjects(category) {
  projectCards.forEach((card) => {
    const cardCategory = card.dataset.category;
    const shouldShow = category === "all" || cardCategory === category;
    card.hidden = !shouldShow;
  });
}

function openLightbox(image) {
  lightboxImage.src = image.dataset.full || image.src;
  lightboxImage.alt = image.alt;
  lightbox.hidden = false;
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
  lightboxImage.alt = "";
}

function validateName() {
  const nameInput = document.querySelector("#name");
  const error = document.querySelector("#name-error");

  if (nameInput.value.trim().length < 2) {
    error.textContent = "Please enter your name using at least two characters.";
    return false;
  }

  error.textContent = "";
  return true;
}

function validateEmail() {
  const emailInput = document.querySelector("#email");
  const error = document.querySelector("#email-error");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value.trim())) {
    error.textContent = "Please enter a valid email address.";
    return false;
  }

  error.textContent = "";
  return true;
}

function validateMessage() {
  const messageInput = document.querySelector("#message");
  const error = document.querySelector("#message-error");

  if (messageInput.value.trim().length < 10) {
    error.textContent = "Please enter a message using at least ten characters.";
    return false;
  }

  error.textContent = "";
  return true;
}

function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  return isNameValid && isEmailValid && isMessageValid;
}

menuToggle.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((currentButton) => currentButton.classList.remove("active"));
    button.classList.add("active");
    filterProjects(button.dataset.filter);
  });
});

projectImages.forEach((image) => {
  image.tabIndex = 0;

  image.addEventListener("click", () => {
    openLightbox(image);
  });

  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(image);
    }
  });
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) {
    closeLightbox();
  }
});

document.querySelector("#name").addEventListener("input", validateName);
document.querySelector("#email").addEventListener("input", validateEmail);
document.querySelector("#message").addEventListener("input", validateMessage);

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validateForm()) {
    formStatus.textContent = "Thank you. Your message has been validated successfully.";
    contactForm.reset();
  } else {
    formStatus.textContent = "";
  }
});
