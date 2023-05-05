import { getApi, postsURL, renderPosts } from "./components/render.js";
import { clearHtml, createSubscribeValidationHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";
import { validateEmail } from "./components/formValidation.js";

const featuredContainer = document.querySelector(".featured-container");
const nextButton = document.querySelector(".arrow-right");
const prevButton = document.querySelector(".arrow-left");

let currentPage = 1;
let postsPerPage = 3;

async function getFeaturedPosts() {
    try {
        const featuredPostsURL = postsURL + `&page=${currentPage}&per_page=${postsPerPage}`;
        const posts = await getApi(featuredPostsURL);
        
        clearHtml(featuredContainer);
        renderPosts(posts, featuredContainer);  
    }
    catch (error) {
        console.log(error);
        clearHtml(featuredContainer);
        createMessage(featuredContainer, "error", "There was an error while loading the posts, please try again");
    }
};
getFeaturedPosts();

nextButton.addEventListener("click", showNextPosts);
prevButton.addEventListener("click", showPreviousPosts);

function showNextPosts() {
    if (currentPage < 4) {
        currentPage++;
        getFeaturedPosts();
        prevButton.style.opacity = 1;
    } 
    if (currentPage === 4) {
        nextButton.style.opacity = 0.2;
    }
};

function showPreviousPosts() {
    if (currentPage > 1) {
        currentPage--;
        getFeaturedPosts();
        nextButton.style.opacity = 1;
    }
    if (currentPage === 1) {
        prevButton.style.opacity = 0.2;
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

subscribeButton.addEventListener("click", openModal);
modalOverlay.addEventListener("click", closeModal);
subscribeClose.addEventListener("click", closeModal);

function openModal() {
    subscribeContainer.style.display = "block";
    modalOverlay.style.display = "block";
};

function closeModal() {
    subscribeContainer.style.display = "none";
    modalOverlay.style.display = "none";
};

// Subscribe Validation
form.addEventListener("click", subscribeValidation);

function subscribeValidation(event) {
    event.preventDefault();

    if (validateEmail(email, email.value, emailError)) {
        clearHtml(subscribeContainer);
        createSubscribeValidationHtml(subscribeContainer);
    };
};

