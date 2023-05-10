import { getPosts, renderFeaturedPosts, totalPages } from "./components/render.js";
import { clearHtml, createSubscribeValidationHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";
import { validateEmail } from "./components/formValidation.js";
import { openModal, closeModal } from "./components/modal.js";

const featuredContainer = document.querySelector(".featured-container");
const nextButton = document.querySelector(".arrow-right");
const prevButton = document.querySelector(".arrow-left");

let currentPage = 1;
let postsPerPage = 3;

async function featuredPosts() {
    try {
        const posts = await getPosts(currentPage, postsPerPage);

        clearHtml(featuredContainer);
        renderFeaturedPosts(posts, featuredContainer);  
    }
    catch (error) {
        console.log(error);
        clearHtml(featuredContainer);
        createMessage(featuredContainer, "error", "There was an error while loading the posts, please try again");
    }
};
featuredPosts();


// Show Next/Previous Posts
nextButton.addEventListener("click", showNextPosts);
prevButton.addEventListener("click", showPreviousPosts);

async function showNextPosts() {
    if (currentPage < totalPages) {
        currentPage++;
        const posts = await getPosts(currentPage, postsPerPage);
        clearHtml(featuredContainer);
        renderFeaturedPosts(posts, featuredContainer);
        prevButton.style.opacity = 1;
    } 
    if (currentPage === totalPages) {
        nextButton.style.opacity = 0.1;
    }
};

async function showPreviousPosts() {
    if (currentPage > 1) {
        currentPage--;
        const posts = await getPosts(currentPage, postsPerPage);
        clearHtml(featuredContainer);
        renderFeaturedPosts(posts, featuredContainer);
        nextButton.style.opacity = 1;
    }
    if (currentPage === 1) {
        prevButton.style.opacity = 0.1;
    }
};


// Subscribe Modal
const subscribeContainer = document.querySelector(".subscribe-container");
const subscribeButton = document.querySelector("#subscribe-button");
const modalOverlay = document.querySelector(".modal-overlay");
const subscribeClose = document.querySelector(".icon-close");
const form = document.querySelector("#signup-form");
const email = document.querySelector("#signup-email");
const emailError = document.querySelector("#email-error");

subscribeButton.addEventListener("click", () => openModal(subscribeContainer, modalOverlay));
modalOverlay.addEventListener("click", () => closeModal(subscribeContainer, modalOverlay));
subscribeClose.addEventListener("click", () => closeModal(subscribeContainer, modalOverlay));

// Subscribe Validation
form.addEventListener("click", subscribeValidation);

function subscribeValidation(event) {
    event.preventDefault();

    if (validateEmail(email, email.value, emailError)) {
        clearHtml(subscribeContainer);
        createSubscribeValidationHtml(subscribeContainer);
    };
};
