import { getPostDetails, renderPostDetails } from "./components/render.js";
import { clearHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";

const postContainer = document.querySelector(".blogpost__wrapper");


async function postDetails() {
    try {
        const post = await getPostDetails();
        
        document.title = `The Flavor Files | ${post.title.rendered}`;
        console.dir(document);
        

        clearHtml(postContainer);
        renderPostDetails(post, postContainer);
    }
    catch (error) {
        console.log(error);
        clearHtml(postContainer);
        createMessage(postContainer, "error", "There was an error while loading this blogpost, please try again");
    };
};
postDetails();