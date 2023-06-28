import { getPostDetails, renderPostDetails } from "./components/render.js";
import { clearHtml, createImageModalHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";
import { openModal, closeModal } from "./components/modal.js";

const postContainer = document.querySelector(".blogpost");
const modalContent = document.querySelector(".modal-content");
const modalOverlay = document.querySelector(".modal-overlay");
const closeModalButton = document.querySelector(".icon-close");

modalOverlay.addEventListener("click", () => closeModal(modalContent, modalOverlay));
closeModalButton.addEventListener("click", () => closeModal(modalContent, modalOverlay));

/**
 * Fetches the specific blogpost and renders the HTML for the post
 */
async function postDetails() {
  try {
    const post = await getPostDetails();

    document.title = `The Flavor Files | ${post.title.rendered}`;

    clearHtml(postContainer);
    renderPostDetails(post, postContainer);
    createImageModalHtml(post, modalContent);

    const image = document.querySelector(".blogpost-image");
    image.addEventListener("click", () => openModal(modalContent, modalOverlay));
  } catch (error) {
    console.log(error);
    clearHtml(postContainer);
    createMessage(postContainer, "error", "There was an error while loading this blogpost, please try again");
  }
}
postDetails();
