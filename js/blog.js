import { totalPages, getPosts, renderPosts} from "./components/render.js";
import { clearHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";

const blogPostsContainer = document.querySelector(".cardcontainer");
const loadPostsButton = document.querySelector(".blog-action button");
const messageContainer = document.querySelector(".message");

let currentPage = 1;
let postsPerPage = 10;

async function blogPosts() {
    try {
        const posts = await getPosts(currentPage, postsPerPage);
        
        clearHtml(blogPostsContainer);
        renderPosts(posts, blogPostsContainer);
        loadPostsButton.style.display = "block";
    }
    catch (error) {
        console.log(error);
        clearHtml(blogPostsContainer);
        createMessage(messageContainer, "error", "There was an error while loading the posts, please try again");
    }
};
blogPosts();


// Load More Blog Posts
loadPostsButton.addEventListener("click", showMorePosts);

async function showMorePosts() {
    try { 
        if (currentPage < totalPages) {
            currentPage++;
            const posts = await getPosts(currentPage, postsPerPage);
            renderPosts(posts, blogPostsContainer);
        } 
        if (currentPage === totalPages) {
            loadPostsButton.style.display = "none";
        }
    }
    catch (error) {
        console.log(error);
        clearHtml(messageContainer);
        createMessage(messageContainer, "error", "There was an error while loading the posts, please try again");
    };
};
