import { getPostDetails, renderPostDetails } from "./components/render.js";
import { clearHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";
import { openModal, closeModal } from "./components/modal.js";

const postContainer = document.querySelector(".blogpost__wrapper");

async function postDetails() {
    try {
        const post = await getPostDetails();
        
        document.title = `The Flavor Files | ${post.title.rendered}`;

        clearHtml(postContainer);
        renderPostDetails(post, postContainer);

        const modalOverlay = document.querySelector(".modal-overlay");
        const imageContainer = document.querySelector(".modal-imagecontainer");
        const closeModalButton = document.querySelector(".modal-imagecontainer .icon-close");
        const image = document.querySelector(".blogpost img");

        image.addEventListener("click", () => openModal(imageContainer, modalOverlay));
        modalOverlay.addEventListener("click", () => closeModal(imageContainer, modalOverlay));
        closeModalButton.addEventListener("click", () => closeModal(imageContainer, modalOverlay));
    }
    catch (error) {
        console.log(error);
        clearHtml(postContainer);
        createMessage(postContainer, "error", "There was an error while loading this blogpost, please try again");
    };
};
postDetails();

