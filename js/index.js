import { getFeaturedPosts, renderFeaturedPosts } from "./components/render.js";
import { clearHtml, createSubscribeValidationHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";
import { validateEmail } from "./components/formValidation.js";
import { openModal, closeModal } from "./components/modal.js";

const featuredContainer = document.querySelector(".carousel-inner");
const nextButton = document.querySelector(".arrow-right");
const prevButton = document.querySelector(".arrow-left");
const subscribeContainer = document.querySelector(".subscribe-container");
const subscribeButton = document.querySelector("#subscribe-button");
const modalOverlay = document.querySelector(".modal-overlay");
const subscribeClose = document.querySelector(".icon-close");
const form = document.querySelector("#signup-form");
const email = document.querySelector("#signup-email");
const emailError = document.querySelector("#email-error");

let slideWidth = 0;
let currentPosition = 0;
let maxScroll = 0;

prevButton.disabled = "true";

nextButton.addEventListener("click", slideRight);
prevButton.addEventListener("click", slideLeft);

subscribeButton.addEventListener("click", () => openModal(subscribeContainer, modalOverlay));
modalOverlay.addEventListener("click", () => closeModal(subscribeContainer, modalOverlay));
subscribeClose.addEventListener("click", () => closeModal(subscribeContainer, modalOverlay));
form.addEventListener("submit", subscribeValidation);

/**
 * Fetches and renders HTML for the featured posts in the carousel
 */
async function featuredPosts() {
  try {
    const posts = await getFeaturedPosts();
    clearHtml(featuredContainer);
    renderFeaturedPosts(posts, featuredContainer);

    if (window.innerWidth >= 1200) {
      slideWidth = featuredContainer.offsetWidth + 10;
    } else {
      slideWidth = featuredContainer.offsetWidth + 20;
    }
    maxScroll = featuredContainer.scrollWidth - featuredContainer.offsetWidth;
  } catch (error) {
    console.log(error);
    clearHtml(featuredContainer);
    createMessage(featuredContainer, "error", "There was an error while loading the posts, please try again");
  }
}
featuredPosts();

// Show Next/Previous Posts
/**
 * Scrolls the carousel to the right
 */
function slideRight() {
  currentPosition += slideWidth;
  featuredContainer.scrollLeft += slideWidth;
  toggleCarouselButtons();
}

/**
 * Scrolls the carousel to the left
 */
function slideLeft() {
  currentPosition -= slideWidth;
  featuredContainer.scrollLeft -= slideWidth;
  toggleCarouselButtons();
}

// Toggle Carousel Buttons
/**
 * Toggles the display and availability of the carousel buttons
 */
function toggleCarouselButtons() {
  if (currentPosition >= maxScroll) {
    nextButton.style.opacity = 0.2;
    nextButton.disabled = "true";
    nextButton.style.cursor = "default";
  } else {
    nextButton.style.opacity = 1;
    nextButton.disabled = "";
    nextButton.style.cursor = "pointer";
  }

  if (!currentPosition) {
    prevButton.style.opacity = 0.2;
    prevButton.disabled = "true";
    prevButton.style.cursor = "default";
  } else {
    prevButton.style.opacity = 1;
    prevButton.disabled = "";
    prevButton.style.cursor = "pointer";
  }
}

// Subscribe Validation
/**
 * Validates if the input is a valid email adress and displays an error message or a validation message
 */
function subscribeValidation(event) {
  event.preventDefault();
  if (validateEmail(email, email.value, emailError)) {
    clearHtml(subscribeContainer);
    createSubscribeValidationHtml(subscribeContainer);
  }
}
